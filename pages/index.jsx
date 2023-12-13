import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HomeComponents/HeroSection";
import CouponSection from "../components/HomeComponents/CouponSection";
import SpecialMenu from "../components/HomeComponents/SpecialMenu";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import DeliverySection from "../components/HomeComponents/DeliverySection";
import { getDataInArray, getDataInObject } from "../lib/mdToJson";

export async function getStaticProps() {
  const allProducts = getDataInArray("./markdowns/products");
  const homeData = getDataInObject("./markdowns/home");
  const coupons = getDataInObject("./markdowns/coupons/home-coupons");

  return {
    props: {
      homeData,
      allProducts: allProducts.slice(0, 4),
      coupons,
    },
  };
}

export default function Home({ homeData, coupons, allProducts }) {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <HeroSection data={homeData["hero-section"]} />
      <CouponSection coupons={coupons} />
      <SpecialMenu allProducts={allProducts} data={homeData["menu-section"]} />
      <TestimonialSection data={homeData["testimonial-section"]} />
      <DeliverySection data={homeData["delivery-section"]} />
    </Layout>
  );
}
