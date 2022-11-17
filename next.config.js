/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
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
