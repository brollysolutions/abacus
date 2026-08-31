# syntax=docker/dockerfile:1

# Next.js 16 requires Node >= 20.9. Alpine keeps the runtime image small.
ARG NODE_VERSION=22-alpine

# ---------------------------------------------------------------------
# deps — install node_modules from the lockfile only, so this layer is
# cached until package.json / package-lock.json actually change.
# ---------------------------------------------------------------------
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------------------------------------------------------------------
# builder — run next build to produce .next/standalone
# ---------------------------------------------------------------------
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules

# Sources are listed explicitly rather than copied with `COPY . .`. If one of
# these is missing from the build context the build fails right here and names
# the path, instead of failing later inside `next build` with the much vaguer
# "Couldn't find any `pages` or `app` directory".
COPY package.json package-lock.json ./
COPY next.config.mjs jsconfig.json postcss.config.mjs ./
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY public ./public

# Fail loudly and readably if the app router directory did not make it in.
RUN test -f app/page.js || { echo "ERROR: app/ missing from build context"; ls -la; exit 1; }

RUN npm run build

# ---------------------------------------------------------------------
# runner — production image
# ---------------------------------------------------------------------
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3020
ENV HOSTNAME=0.0.0.0

# Run as a non-root user. node:alpine already ships uid/gid 1000 "node".
USER node

# The standalone server does not bundle public/ or .next/static — those
# have to be copied in alongside it (see the `output` config docs).
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

EXPOSE 3020

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
