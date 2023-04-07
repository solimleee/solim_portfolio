/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  nextScriptWorkers: true,
  swcMinify: true,
  images: {
    domains: ['media.tenor.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
