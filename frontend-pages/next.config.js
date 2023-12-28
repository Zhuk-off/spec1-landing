/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spec1.zhukoff.by',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
