import Head from "next/head";
import Layout from "../../components/Layout";
import aboutStyles from "../../assets/styles/about.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";
import OurStory from "../../components/AboutComponents/OurStory";
import OurTeam from "../../components/AboutComponents/OurTeam";
import OurService from "../../components/AboutComponents/OurService";
import OurServiceV2 from "../../components/AboutComponents/OurServiceV2";
import { getDataInObject } from "../../lib/mdToJson";

const breadcrumbs = [
  <Link className={aboutStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={aboutStyles.breadcrumb_link} href="/about">
    About Us
  </Link>,
];

export async function getStaticProps() {
  const aboutData = getDataInObject('./markdowns/about');

  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <CommonBanner title={"About Us"} breadcrumbs={breadcrumbs} />
      <OurStory story={aboutData["our-story"]} />
      <OurTeam team={aboutData["chef-team"]} />
      <OurService data={aboutData["service"].services} />
      <OurServiceV2 data={aboutData["servicev2"]} />
    </Layout>
  );
}
