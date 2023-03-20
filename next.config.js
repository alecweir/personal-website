/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      { source: "/photography", destination: "/", permanent: true },
      { source: "/projects", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
