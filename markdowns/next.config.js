/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@mui/material",
    "swiper/react",
    "react-leaflet",
  ],
  images: {
    remotePatterns: [],
  },
  env: {
    NEXT_APP_URL: "https://italian-pizza-sigma.vercel.app/",
    CARD_IMAGE: "/images/hero-image.webp",
    DOMAIN: "italian-pizza-sigma.vercel.app",
    ANALITICS_ID: "G-KTDJQQD8CB",
    MAIL_CHIMP_URL:
      "https://app.us13.list-manage.com/subscribe/post?u=4fd4ca3ebcd80644de9e8bcb1&amp;id=813b96f625&amp;f_id=00fdf1e7f0",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
