import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HomeComponents/HeroSection";
import CouponSection from "../components/HomeComponents/CouponSection";
import SpecialMenu from "../components/HomeComponents/SpecialMenu";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import DeliverySection from "../components/HomeComponents/DeliverySection";
import {
  getAllHomeCoupons,
  getAllHomeData,
  getAllPizzaData,
  getAllTestimonials,
} from "../lib/mdToJson";
import { useSelector } from "react-redux";

export async function getStaticProps() {
  const allPizza = getAllPizzaData();
  const homeData = getAllHomeData();
  const testimonials = getAllTestimonials();
  const coupons = getAllHomeCoupons();
  return {
    props: {
      testimonials,
      homeData,
      coupons,
      allPizza
    },
  };
}

export default function Home({ testimonials, homeData, coupons, allPizza }) {
  
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <HeroSection data={homeData} />
      <CouponSection coupons={coupons} />
      <SpecialMenu allPizza={allPizza} data={homeData} />
      <TestimonialSection data={homeData} testimonials={testimonials} />
      <DeliverySection data={homeData} />
    </Layout>
  );
}