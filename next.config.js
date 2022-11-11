/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'yt3.ggpht.com',
      'lh3.googleusercontent.com',
      'cdn.sanity.io',
      'www.dropbox.com',
    ],
  },
};

module.exports = nextConfig;
