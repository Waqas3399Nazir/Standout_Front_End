/** @type {import('next').NextConfig} */
require("dotenv").config;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.wheelpros.com", "americanforcewheels.com"],
  },
  env: {
    TEST_API_URL: process.env.TEST_API_URL,
  },
};

module.exports = nextConfig;
