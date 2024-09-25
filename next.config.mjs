/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          }
        ],
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.bing.co'      
              },
        ],
      },
};

export default nextConfig;
