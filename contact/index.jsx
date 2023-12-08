import Head from 'next/head';
import Layout from '../../components/Layout';
import contactStyles from '../../assets/styles/contact.module.scss';
import Head from "next/head";
import Layout from "../../components/Layout";
import contactStyles from "../../assets/styles/contact.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";

const breadcrumbs = [
  <Link className={contactStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={contactStyles.breadcrumb_link} href="/about">
    Contact Us
  </Link>,
];

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