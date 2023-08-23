/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co", "cbissn.ibict.br", "localhost"],
  },
};
module.exports = nextConfig;
