import { Header } from "antd/es/layout/layout";
import layout from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Layout = ({ children }) => {

  return (
    <div className={layout.root_layout}>
      <Header className={`${layout.header} custom-container`}>
        <div className={layout.logo} ><Image src={logo} /></div>
        <nav className={layout.navigation} >
          <Link className={layout.active} href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pizza">Pizza</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
      </Header>
      <main className={layout.content}>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;