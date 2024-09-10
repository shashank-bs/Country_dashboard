/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org", "restcountries.com"], // Add the domains where the flags are hosted
  },
  reactStrictMode: false,
};

export default nextConfig;
