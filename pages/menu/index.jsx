import Head from 'next/head';
import Layout from '../../components/Layout';
import menuStyles from '../../styles/menu.module.scss';
import CommonBanner from '../../components/CommonBanner';
import Link from 'next/link';
import CategoryFilter from '../../components/MenuComponents/CategoryFilter';
import DealsAndOffers from '../../components/MenuComponents/DealsAndOffers';
import { getDataInArray, getDataInObject } from '../../lib/mdToJson';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/pizza.slice';

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
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.pizza.cart);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <Layout title="Menu" >
      <Head>
        <title>Menu</title>
      </Head>     
      <CommonBanner title={"Menu"} breadcrumbs={breadcrumbs} />
      <CategoryFilter cartData={cartData} addProductToCart={addProductToCart} allProducts={allProducts} />
      <DealsAndOffers coupons={coupons} />
    </Layout>
  );
}