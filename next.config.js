/** @type {import('next').NextConfig} */
try {
  require('dotenv').config({ path: '.env.local' });
} catch (e) {}

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  generateBuildId: () => `build-${Date.now()}`,
  // Rewrite the verification URL to the internal route
  async rewrites() {
    return [
      {
        source: '/google620f3bb84650dabf.html',
        destination: '/google620f3bb84650dabf',
      },
    ];
  },
}

module.exports = nextConfig
