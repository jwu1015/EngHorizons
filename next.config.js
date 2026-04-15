/** @type {import('next').NextConfig} */
const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/engineering-horizons";

const nextConfig = {
  async redirects() {
    return [
      { source: "/gallery", destination: "/", permanent: false },
      { source: "/projects", destination: "/", permanent: true },
      { source: "/donate", destination: DONATE_URL, permanent: false },
      { source: "/journey", destination: DONATE_URL, permanent: true },
      { source: "/what-we-do", destination: "/about", permanent: true },
    ];
  },
};

module.exports = nextConfig;
