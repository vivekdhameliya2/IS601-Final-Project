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
    "swiper/react",
    "react-leaflet",
  ],
  images: {
    domains: ["www.dominos.co.in", "wataburger.in"],
  },
  env: {
    ANALITICS_ID: "G-KTDJQQD8CB"
  }
};

module.exports = nextConfig;
