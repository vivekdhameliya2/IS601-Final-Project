import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import layout from "./layout.module.scss";
import PrimaryFooter from "./PrimaryFooter";
import ReactGA from "react-ga4";

const Layout = ({ children, title }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.ANALITICS_ID);
    ReactGA.send({
      hitType: "page_view",
      page_location: window.location.pathname,
      title: title,
    });
  }, []);

  const handleScroll = (e) => {
    const offset = e.target.scrollTop;

    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div onScroll={handleScroll} className={layout.root_layout}>
      <Navbar isSticky={isSticky} />
      <main className={layout.content}>{children}</main>
      <PrimaryFooter />
    </div>
  );
};

export default Layout;