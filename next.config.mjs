/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com', 'a0.muscache.com', 'www.bing.com', 'img.freepik.com', 'images.unsplash.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',  // Unsplash
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'a0.muscache.com',      // Airbnb
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'www.bing.com',         // Bing
  //     },
  //   ],
  // },
};

export default nextConfig;
