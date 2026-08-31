/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone with a minimal server.js and only the
  // node_modules the build actually traced — this is what the Docker
  // runtime stage copies, so the final image carries no dev deps.
  output: "standalone",
};

export default nextConfig;
