import Head from 'next/head';
import Layout from '../../components/Layout';
import contactStyles from '../../assets/styles/contact.module.scss';

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>contact</title>
      </Head>     
      <section className={contactStyles.hero_section} >
        <div className={contactStyles.overlay_image} >
        </div>
      </section>
      <section>
      contact Page
      </section>
      
    </Layout>
  );
}