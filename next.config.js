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
    env: {
      CHANNELIO_PLIGIN_KEY: '29ada575-8bc9-46aa-85cf-66b24d3397b3',
    },
  },
};

module.exports = nextConfig;
