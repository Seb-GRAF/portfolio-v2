/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
}
