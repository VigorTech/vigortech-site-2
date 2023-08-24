/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  i18n: {
    locales: ["pt-BR", "en-US", "es-ES"],
    defaultLocale: "pt-BR",
  },
};
module.exports = nextConfig;
