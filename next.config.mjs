/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
