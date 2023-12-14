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

  return {
    props: {
      contact: contact.contact
    },
  };
}

export default function ContactUs({contact}) {
  return (
    <Layout title="Contact Us" >
      <Head>
        <title>Contact Us</title>
      </Head>
      <CommonBanner title={"Contact Us"} breadcrumbs={breadcrumbs} />
      <ContactUsForm contact={contact} />
      <ContactInfo />
    </Layout>
  );
}
