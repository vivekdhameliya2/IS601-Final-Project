import Head from "next/head";
import Layout from "../../components/Layout";
import aboutStyles from "../../assets/styles/about.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";
import OurStory from "../../components/AboutComponents/OurStory";
import OurTeam from "../../components/AboutComponents/OurTeam";
import OurService from "../../components/AboutComponents/OurService";
import OurServiceV2 from "../../components/AboutComponents/OurServiceV2";

const breadcrumbs = [
  <Link className={aboutStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={aboutStyles.breadcrumb_link} href="/about">
    About Us
  </Link>,
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <CommonBanner title={"About Us"} breadcrumbs={breadcrumbs} />
      <OurStory />
      <OurTeam />
      <OurService />
      <OurServiceV2 />
    </Layout>
  );
}
