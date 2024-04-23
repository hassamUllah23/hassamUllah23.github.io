/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
