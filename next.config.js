/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  nextScriptWorkers: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  images: {
    domains: ['media.tenor.com'],
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir: true,
  },
};

module.exports = nextConfig;
