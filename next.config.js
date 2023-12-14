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
      "https://us14.list-manage.com/contact-form?u=2ed0c1623a0ff25941610de43&form_id=d72586fd02e5b551904db1f1ebe4ca69",
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
