/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
      "@mui/material",
      "rc-util",
      "@babel/runtime",
      "@ant-design/icons",
      "@ant-design/icons-svg",
      "rc-pagination",
      "rc-picker",
      "rc-tree",
      "rc-table",
    ],
  };

  module.exports = nextConfig;