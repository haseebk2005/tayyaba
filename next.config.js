/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com",
    ],
  },
};

module.exports = nextConfig;
