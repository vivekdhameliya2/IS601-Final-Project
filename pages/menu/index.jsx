import Head from 'next/head';
import Layout from '../../components/Layout';
import menuStyles from '../../assets/styles/menu.module.scss';
import CommonBanner from '../../components/CommonBanner';
import Link from 'next/link';
import CategoryFilter from '../../components/MenuComponents/CategoryFilter';
import DealsAndOffers from '../../components/MenuComponents/DealsAndOffers';
import { getDataInArray, getDataInObject } from '../../lib/mdToJson';

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

  return {
    props: {
      allProducts,
      coupons: coupons.deals
    },
  };
}

export default function Menu({ allProducts, coupons }) {
  
  return (
    <Layout>
      <Head>
        <title>Menu</title>
      </Head>     
      <CommonBanner title={"Menu"} breadcrumbs={breadcrumbs} />
      <CategoryFilter allProducts={allProducts} />
      <DealsAndOffers coupons={coupons} />
    </Layout>
  );
}