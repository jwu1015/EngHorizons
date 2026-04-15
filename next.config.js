
const DONATE_URL =
  "https://gofund.me/d6f60adee";

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
