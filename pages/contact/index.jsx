import Head from "next/head";
import Layout from "../../components/Layout";
import contactStyles from "../../styles/contact.module.scss";
import CommonBanner from "../../components/CommonBanner";
import Link from "next/link";
import ContactUsForm from "../../components/ContactUsComponents";
import ContactInfo from "../../components/ContactUsComponents/ContactInfo";
import { getDataInObject } from "../../lib/mdToJson";

const breadcrumbs = [
  <Link className={contactStyles.breadcrumb_link} href="/">
    Home
  </Link>,
  <Link className={contactStyles.breadcrumb_link} href="/about">
    Contact Us
  </Link>,
];

export async function getStaticProps() {
  const contact = getDataInObject("./markdowns/contact-us");
  const layoutData = getDataInObject("./markdowns/layout");

  return {
    props: {
      contact: contact.contact,
      layoutData
    },
  };
}

export default function ContactUs({ contact, layoutData }) {
  return (
    <Layout layoutData={layoutData} title="Contact Us">
      <Head>
        <title>Contact Us</title>
        <meta
          name="Description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href={`${process.env.NEXT_APP_URL}/contact`}></link>
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

        <meta property="og:url" content={`${process.env.NEXT_APP_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          property="og:description"
          content="Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta property="og:image" content={process.env.CARD_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.DOMAIN} />
        <meta property="twitter:url" content={`${process.env.NEXT_APP_URL}/contact`} />
        <meta
          name="twitter:title"
          content="Italian Pizza | 3rd Largest Pizza Chain in India"
        />
        <meta
          name="twitter:description"
          content="Italian Pizza is the 3rd largest Pizza chain  in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta name="twitter:image" content={process.env.CARD_IMAGE}></meta>
      </Head>
      <CommonBanner title={"Contact Us"} breadcrumbs={breadcrumbs} />
      <ContactUsForm contact={contact} />
      <ContactInfo contact={contact} />
    </Layout>
  );
}
