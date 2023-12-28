/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: [
    //   'image/webp',
    //   'image/avif', 
    // ],
    // domains: [
    //   "localhost", 
    //   "**.localhost", 
    //   "zhukoff.by",
    //   "spec.zhukoff.by", 
    //   "spec1.zhukoff.by", 
    //   "www.spec1.zhukoff.by", 
    // ]
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1338",
      //   pathname: "/uploads/**",
      // },
      {
        protocol: "http",
        hostname: "localhost",
      },
      // {
      //   protocol: "https",
      //   hostname: "localhost",
      // },
      // {
      //   protocol: 'https',
      //   hostname: '**.zhukoff.by',
      //   port: '',
      //   pathname: '/**',
      // },
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      // },
      // {
      //   protocol: "http",
      //   hostname: "**.zhukoff.by",
      // },
      {
        protocol: "https",
        hostname: "**.zhukoff.by",
      },
      {
        protocol: "https",
        hostname: "mc.yandex.com",
      },
      // {
      //   protocol: "http",
      //   hostname: "**.zhukoff.by",
      // },
      // {
      //   protocol: "https",
      //   hostname: "spec1.zhukoff.by",
      //   port: "",
      //   pathname: "/uploads/**",
      // },
    ],
  },
};

module.exports = nextConfig;
