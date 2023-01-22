/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    presets: ['next/babel'],
  },
  images: {
    domains: ['upload-lunettes.s3.amazonaws.com'],
  },
  pageExtensions: ['tsx', 'jsx'],
};

module.exports = nextConfig;
