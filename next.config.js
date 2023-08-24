/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  i18n: {
    locales: ["br", "es"],
    defaultLocale: "br",
  },
};
module.exports = nextConfig;
