/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARNING !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARNING !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig