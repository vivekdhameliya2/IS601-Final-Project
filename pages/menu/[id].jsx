import Head from "next/head";
import Layout from "../../components/Layout";
import pizzaStyles from "../../assets/styles/pizza.module.scss";
import PizzaDetail from "../../components/PizzaComponents/PizzaDetail";
import DealsAndOffers from "../../components/MenuComponents/DealsAndOffers";
import Checkout from "../../components/PizzaComponents/Checkout";
import { getDataInObject } from "../../lib/mdToJson";

export async function getStaticPaths() {
  const allProducts = getDataInObject("./markdowns/products");

  const paths = Object.keys(allProducts).map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false, // or true if you want to handle not-yet-generated paths
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const allProducts = getDataInObject("./markdowns/products");
  const coupons = getDataInObject("./markdowns/coupons/deals-coupons");
  const product = allProducts[id];

  return {
    props: {
      coupons: coupons.deals,
      product
    },
  };
}

export default function Pizza({ coupons, product }) {
  
  return (
    <Layout>
      <Head>
        <title>Pizza</title>
      </Head>
      <section className={pizzaStyles.hero_section}>
        <div className={pizzaStyles.overlay_image}></div>
      </section>
      <PizzaDetail product={product} />
      <Checkout />
      <DealsAndOffers coupons={coupons} background={"#e6f0e7 !important"} />
    </Layout>
  );
}
