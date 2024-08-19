/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['imgur.com', 'i.imgur.com'],
  // },
  images: {
    remotePatterns: [
      {hostname: 'i.imgur.com'},
      {hostname: 'imgur.com'},
    ]
  }
};

export default nextConfig;
