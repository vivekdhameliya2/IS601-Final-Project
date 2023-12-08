import Head from 'next/head';
import Layout from '../../components/Layout';
import menuStyles from '../../assets/styles/menu.module.scss';

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Menu</title>
      </Head>     
      <section className={menuStyles.hero_section} >
        <div className={menuStyles.overlay_image} >
        </div>
      </section>
      <section>
        Menu Page
      </section>
      
    </Layout>
  );
}