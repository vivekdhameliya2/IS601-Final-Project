import Head from 'next/head';
import Layout from '../../components/Layout';
import menuStyles from '../../assets/styles/menu.module.scss';
import CommonBanner from '../../components/CommonBanner';
import Link from 'next/link';

const breadcrumbs = [
  <Link className={menuStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={menuStyles.breadcrumb_link} href="/about">
    Menu
  </Link>,
];

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Menu</title>
      </Head>     
      <CommonBanner title={"Menu"} breadcrumbs={breadcrumbs} />
      <section>
        Menu Page
      </section>
      
    </Layout>
  );
}