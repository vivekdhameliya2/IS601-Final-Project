import Head from 'next/head';
import Layout from '../../components/Layout';
import pizzaStyles from '../../assets/styles/pizza.module.scss';
import PizzaDetail from '../../components/PizzaComponents/PizzaDetail';
import DealsAndOffers from '../../components/MenuComponents/DealsAndOffers';
import Checkout from '../../components/PizzaComponents/Checkout';

export default function Pizza() {
  return (
    <Layout>
      <Head>
        <title>Pizza</title>
      </Head>     
      <section className={pizzaStyles.hero_section} >
        <div className={pizzaStyles.overlay_image} >
        </div>
      </section>
      <PizzaDetail />
      <Checkout />
      <DealsAndOffers background={"#e6f0e7 !important"} />
    </Layout>
  );
}