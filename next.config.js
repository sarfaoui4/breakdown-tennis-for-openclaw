/** @type {import('next').NextConfig} */
// Load .env.local for build-time environment variables
try {
  require('dotenv').config({ path: '.env.local' });
} catch (e) {}

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // webpack alias for @ (usually default in Next.js, but ensure)
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  // Force new build ID to avoid cache issues
  generateBuildId: () => `build-${Date.now()}`,
}

module.exports = nextConfig
