/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      unoptimized: true,
  },
  output: "export",
  
  async redirects() {
      return [
          {
              source: '/',
              destination: '/home',
              permanent: true,
          },
      ];
  },
};

module.exports = nextConfig;
