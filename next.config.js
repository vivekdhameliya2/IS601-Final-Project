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
    NEXT_APP_URL: "https://is-601-final-project-drab.vercel.app/",
    CARD_IMAGE: "/images/hero-image.webp",
    DOMAIN: "is-601-final-project-drab.vercel.app",
    ANALITICS_ID: "G-0WCQ0QENB0",
    MAIL_CHIMP_URL:
      "https://gmail.us21.list-manage.com/subscribe/post?u=5526548e0995d18710f31f6d0&amp;id=e43cfb6601&amp;f_id=003aede6f0"},
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
