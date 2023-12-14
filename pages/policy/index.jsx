import policyStyles from "../../styles/policy.module.scss";
import pizzaStyles from "../../styles/pizza.module.scss";
import Layout from "../../components/Layout";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <Layout title="PrivacyPolicy">
      <Head>
        <title>Prvacy Policy</title>
        <meta
          name="Description"
          content="Italian Pizza is one of the top food franchises in the world, renowned for offering an impressively huge variety of scrumptious pizzas."
        ></meta>
        <link rel="canonical" href={process.env.NEXT_APP_URL}></link>
        <link
          rel="preload"
          fetchpriority="high"
          href="/images/hero-image.webp"
          as="image"
          type="image/webp"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content={process.env.NEXT_APP_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prvacy Policy" />
        <meta
          property="og:description"
          content="Italian Pizza is the 3rd largest Pizza chain in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta property="og:image" content={process.env.CARD_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.DOMAIN} />
        <meta property="twitter:url" content={process.env.NEXT_APP_URL} />
        <meta name="twitter:title" content="Prvacy Policy" />
        <meta
          name="twitter:description"
          content="Italian Pizza is the 3rd largest Pizza chain  in India. We offer a proven business model to help our franchisees craft the most delicious pizza at unbelievable prices."
        />
        <meta name="twitter:image" content={process.env.CARD_IMAGE}></meta>
      </Head>
      <section className={pizzaStyles.hero_section}>
        <div className={pizzaStyles.overlay_image}></div>
      </section>
      <section class={`${policyStyles.policy_wrapper} custom-container`}>
        <h1>Info &amp; cookies</h1>
        <div>
          <div className={policyStyles.info_wrapper}>
            <p>
              At our website, we use cookies to enhance your browsing experience
              and provide you with personalized content and services. Cookies
              are small text files that are placed on your computer or mobile
              device when you visit a website. They help the website remember
              your preferences, settings, and login information, and provide you
              with a more seamless experience.
            </p>
            <p>
              We use several types of cookies on our website, including session
              cookies, persistent cookies, and third-party cookies. Session
              cookies are temporary cookies that are deleted when you close your
              browser, while persistent cookies remain on your device for a set
              period of time. Third-party cookies are placed by a third-party
              service provider, such as Google Analytics, to collect data about
              your browsing behavior and provide analytics to help us improve
              our website.
            </p>
            <p>
              Our use of cookies and third-party scripts is in accordance with
              our Privacy Policy, which outlines how we collect, use, and
              protect your personal information. We only collect data that is
              necessary to provide you with the best possible user experience
              and to improve our website's performance.
            </p>
            <p>
              Google Analytics is one third-party script that we use on our
              website. It helps us to understand how visitors use our site, such
              as which pages are visited most frequently and for how long. This
              data is used to improve our website's functionality and content.
              Google Analytics uses cookies to collect information about your
              browsing behavior, including your IP address and the pages you
              visit on our website. This information is stored on Google's
              servers and may be shared with other Google services.
            </p>
            <p>
              If you do not want Google Analytics to collect data about your
              browsing behavior, you can opt-out by installing the Google
              Analytics Opt-out Browser Add-on. The add-on prevents Google
              Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing
              information with Google Analytics about visits activity.
            </p>
            <p>
              In addition to Google Analytics, we may also use other third-party
              scripts and services on our website, such as social media plugins
              and advertising networks. These scripts may also use cookies to
              collect data about your browsing behavior and may share this
              information with other third-party services.
            </p>
            <p>
              Overall, our use of cookies and third-party scripts is designed to
              improve your browsing experience and provide you with personalized
              content and services. We take your privacy seriously and will only
              collect data that is necessary to provide you with the best
              possible user experience. If you have any questions or concerns
              about our use of cookies or third-party scripts, please contact us
              through our website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
