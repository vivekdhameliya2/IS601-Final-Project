import Head from 'next/head';
import Layout from '../components/Layout';
import homeStyle from "../assets/styles/homepage.module.scss";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>     
      <div>
        Homepage
      </div>
      <section className={homeStyle.hero_section} >
        <div className={homeStyle.overlay_image} >
        </div>
      </section>
    </Layout>
  );
}