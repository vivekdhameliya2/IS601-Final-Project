import Head from "next/head";
import Layout from "../../components/Layout";
import aboutStyles from "../../styles/about.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";
import OurStory from "../../components/AboutComponents/OurStory";
import OurService from "../../components/AboutComponents/OurService";
import OurServiceV2 from "../../components/AboutComponents/OurServiceV2";
import { getDataInObject } from "../../lib/mdToJson";
import dynamic from "next/dynamic";

const OurTeam = dynamic(() =>
  import("../../components/AboutComponents/OurTeam")
);

const breadcrumbs = [
  <Link className={aboutStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={aboutStyles.breadcrumb_link} href="/about">
    About Us
  </Link>,
];

export async function getStaticProps() {
  const aboutData = getDataInObject("./markdowns/about");

  return {
    props: {
      aboutData,
    },
  };
}

export default function About({ aboutData }) {
  return (
    <Layout title="Homepage">
      <Head>
        <title>About</title>
        <meta
          name="Description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href="http://localhost:3000/about"></link>
        <link
          rel="preload"
          fetchpriority="high"
          href="/images/about-hero.webp"
          as="image"
          type="image/webp"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content="http://localhost:3000/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          property="og:description"
          content="Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta property="og:image" content="/logo/logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="localhost" />
        <meta property="twitter:url" content="http://localhost:3000/about" />
        <meta
          name="twitter:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          name="twitter:description"
          content="Italian Pizza is the 3rd largest Pizza chain  in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta name="twitter:image" content="/logo/logo.svg"></meta>
      </Head>
      <CommonBanner title={"About Us"} breadcrumbs={breadcrumbs} />
      <OurStory story={aboutData["our-story"]} />
      <OurTeam team={aboutData["chef-team"]} />
      <OurService data={aboutData["service"].services} />
      <OurServiceV2 data={aboutData["servicev2"]} />
    </Layout>
  );
}
