import Head from 'next/head';
import Layout from '../../components/Layout';
import pizzaStyles from '../../assets/styles/pizza.module.scss';

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
      <section>
        Pizza Page
      </section>
      
    </Layout>
  );
}