/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        WEB_URL: process.env.WEB_URL
      }
};

export default nextConfig;
