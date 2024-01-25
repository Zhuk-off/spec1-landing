/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.zhukoff.by",
      },
      {
        protocol: "https",
        hostname: "mc.yandex.com",
      },
    ],
  },
};

module.exports = nextConfig;
