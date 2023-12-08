import Head from 'next/head';
import Layout from '../../components/Layout';
import aboutStyles from '../../assets/styles/about.module.scss';


export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>     
      <section className={aboutStyles.hero_section} >
        <div className={aboutStyles.overlay_image} >
        </div>
      </section>
      <section>
        About Page
      </section>
      
    </Layout>
  );
}