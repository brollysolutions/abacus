/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone with a minimal server.js and only the
  // node_modules the build actually traced — this is what the Docker
  // runtime stage copies, so the final image carries no dev deps.
  output: "standalone",

  // Every secondary page is linked with a trailing slash (/about-us/,
  // /parent-faqs/, …), matching the reference. Without this Next would
  // redirect each of those links to the slashless form on every click.
  trailingSlash: true,
};

export default nextConfig;
