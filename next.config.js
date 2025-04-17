// next.config.js

const nextConfig = {
  output: 'export',  // Static export
  images: {
    unoptimized: true,  // Disable Image Optimization (for static export)
  },
};

module.exports = nextConfig;
