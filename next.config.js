/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['upload-lunettes.s3.amazonaws.com'],
  },
  pageExtensions: [
    './slices/index.js',
    './slices/Produto/index.js',
    './slices/Produto/model.json',
    './detalhes/style.ts',
    './produtos/style.ts',
  ],
};

module.exports = nextConfig;
