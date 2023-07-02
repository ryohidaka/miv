/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = nextConfig;
