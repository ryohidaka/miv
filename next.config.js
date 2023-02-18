/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
  },
};

module.exports = nextConfig;
