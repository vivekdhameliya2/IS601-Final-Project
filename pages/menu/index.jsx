import Head from "next/head";
import Layout from "../../components/Layout";
import menuStyles from "../../styles/menu.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";
import CategoryFilter from "../../components/MenuComponents/CategoryFilter";
import DealsAndOffers from "../../components/MenuComponents/DealsAndOffers";
import { getDataInArray, getDataInObject } from "../../lib/mdToJson";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/pizza.slice";

const breadcrumbs = [
  <Link className={menuStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={menuStyles.breadcrumb_link} href="/about">
    Menu
  </Link>,
];

export async function getStaticProps() {
  const allProducts = getDataInArray("./markdowns/products");
  const coupons = getDataInObject("./markdowns/coupons/deals-coupons");
  const layoutData = getDataInObject("./markdowns/layout");

  return {
    props: {
      allProducts,
      coupons: coupons.deals,
      layoutData
    },
  };
}

export default function Menu({ allProducts, coupons, layoutData }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.pizza.cart);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Layout layoutData={layoutData} title="Menu">
      <Head>
        <title>Menu</title>
        <meta
          name="description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href={`${process.env.NEXT_APP_URL}/menu`}></link>
        <link
          rel="preload"
          fetchpriority="high"
          href="/images/about-hero.webp"
          as="image"
          type="image/webp"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content={`${process.env.NEXT_APP_URL}/menu`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          property="og:description"
          content="Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta property="og:image" content={process.env.CARD_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.DOMAIN} />
        <meta property="twitter:url" content={`${process.env.NEXT_APP_URL}/menu`} />
        <meta
          name="twitter:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          name="twitter:description"
          content="Italian Pizza is the 3rd largest Pizza chain  in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta name="twitter:image" content={process.env.CARD_IMAGE}></meta>
      </Head>
      <CommonBanner title={"Menu"} breadcrumbs={breadcrumbs} />
      <CategoryFilter
        cartData={cartData}
        addProductToCart={addProductToCart}
        allProducts={allProducts}
      />
      <DealsAndOffers coupons={coupons} />
    </Layout>
  );
}
