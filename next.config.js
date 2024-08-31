require("next-ws/server").verifyPatch();

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);
