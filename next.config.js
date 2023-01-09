/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
            },
        ],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
