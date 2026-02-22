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
}

module.exports = nextConfig
