import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import layout from "./layout.module.scss";
import ReactGA from "react-ga4";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";

const PrimaryFooter = dynamic(() => import("./PrimaryFooter"))
const GdprPopup = dynamic(() => import("../CookieConsentModal"), {
  ssr: false,
});

const Layout = ({ children, title }) => {
  const [cookies] = useCookies(["cookieConsent"]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (cookies.cookieConsent) {
      initializeGA();
    }
  }, []);

  const handleScroll = (e) => {
    const offset = e.target.scrollTop;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const initializeGA = () => {
    ReactGA.initialize(process.env.ANALITICS_ID);
    ReactGA.send({
      hitType: "page_view",
      page_location: window.location.pathname,
      title: title,
    });
  };

  return (
    <div onScroll={handleScroll} className={layout.root_layout}>
      <Navbar isSticky={isSticky} />
      <main className={layout.content}>{children}</main>
      <PrimaryFooter />
      <div>{typeof cookies.cookieConsent !== "boolean" && <GdprPopup initializeGA={initializeGA} />}</div>
    </div>
  );
};

export default Layout;
