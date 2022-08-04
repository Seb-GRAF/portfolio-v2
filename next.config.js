/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  reactStrictMode: false,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: ['media.graphassets.com', 'cdn.jsdelivr.net'],
  },
}
