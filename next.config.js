/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: './',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  Unoptimized: true,
};

module.exports = nextConfig;
