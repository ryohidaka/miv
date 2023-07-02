const nextTranslate = require("next-translate-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
  plugins: ["next-translate"],
});

module.exports = nextConfig;
