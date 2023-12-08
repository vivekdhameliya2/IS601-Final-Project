import { useState } from "react";
import Navbar from "./Navbar";
import layout from "./layout.module.scss";

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = (e) => {
    const offset = e.target.scrollTop;
    
    if (offset > 2) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div onScroll={handleScroll} className={layout.root_layout}>
      <Navbar isSticky={isSticky} />
      <main className={layout.content}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;