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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dominos.co.in",
      },
      {
        protocol: "https",
        hostname: "wataburger.in",
      },
    ],
  },
  env: {
    ANALITICS_ID: "G-KTDJQQD8CB",
    MAIL_CHIMP_URL:
      "https://app.us13.list-manage.com/subscribe/post?u=4fd4ca3ebcd80644de9e8bcb1&amp;id=813b96f625&amp;f_id=00fdf1e7f0",
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
