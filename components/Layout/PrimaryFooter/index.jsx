import layout from "../layout.module.scss";
import logo from "../../../assets/images/logo.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import youtube from "../../../assets/images/youtube.svg";
import twitter from "../../../assets/images/twitter.svg";
import Image from "next/image";
import Link from "next/link";

const PrimaryFooter = () => {
  return (
    <footer className={`${layout.footer} custom-container`}>
      <div className={layout.nav_section}>
        <div className={layout.social_card}>
          <div className={layout.footer_logo}>
            <Image src={logo} alt="FooterLogo" />
          </div>
          <p>It is a long established fact that a reader will be.</p>
          <div className={layout.social_icons}>
            <div className={layout.social_icon}>
              <Image src={facebook} alt="facebook" />
            </div>
            <div className={layout.social_icon}>
              <Image src={instagram} alt="instagram" />
            </div>
            <div className={layout.social_icon}>
              <Image src={linkedin} alt="linkedin" />
            </div>
            <div className={layout.social_icon}>
              <Image src={youtube} alt="youtube" />
            </div>
            <div className={layout.social_icon}>
              <Image src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <div className={layout.nav_container}>
          <div className={layout.nav_wrapper}>
            <h3>Company</h3>
            <div className={layout.nav_links}>
              <Link href="/" className={layout.nav_link}>Home</Link>
              <Link href="/about" className={layout.nav_link}>About</Link>
              <Link href="/menu" className={layout.nav_link}>Menu</Link>
              <Link href="/contact" className={layout.nav_link}>Contact US</Link>
            </div>
          </div>
          <div className={layout.nav_wrapper}>
            <h3>Social Media</h3>
            <div className={layout.nav_links}>
              <Link href="" className={layout.nav_link}>Facebook</Link>
              <Link href="" className={layout.nav_link}>Linked In</Link>
              <Link href="" className={layout.nav_link}>Github</Link>
              
            </div>
          </div>
          
        </div>
      </div>
      <hr className={layout.divider_two} />
      <div className={layout.copyright}>© 2023 Italian Pizza</div>
    </footer>
  );
};

export default PrimaryFooter;
