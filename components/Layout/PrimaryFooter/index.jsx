import { Footer } from "antd/es/layout/layout";
import layout from "../layout.module.scss";
import logo from "../../../assets/images/logo.svg";
import facebook from "../../../assets/images/facebook.svg";
import instagram from "../../../assets/images/instagram.svg";
import linkedin from "../../../assets/images/linkedin.svg";
import youtube from "../../../assets/images/youtube.svg";
import twitter from "../../../assets/images/twitter.svg";
import { Button, Input } from "antd";
import Image from "next/image";

const PrimaryFooter = () => {
  return (
    <Footer className={`${layout.footer} custom-container`}>
      <div className={layout.offer_section}>
        <h2>Want More? Sign Up For Pizza Offer</h2>
        <div className={layout.input_wrapper}>
          <Input type="text" placeholder="Enter your email" />
          <Button className="primary-button">Submit</Button>
        </div>
      </div>
      <hr className={layout.divider} />
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
            <h3>About Us</h3>
            <div className={layout.nav_links}>
              <a className={layout.nav_link}>Press</a>
              <a className={layout.nav_link}>News</a>
              <a className={layout.nav_link}>MediaKit</a>
              <a className={layout.nav_link}>Releases</a>
              <a className={layout.nav_link}>Contact</a>
            </div>
          </div>
          <div className={layout.nav_wrapper}>
            <h3>Social Media</h3>
            <div className={layout.nav_links}>
              <a className={layout.nav_link}>Facebook</a>
              <a className={layout.nav_link}>Linked In</a>
              <a className={layout.nav_link}>Github</a>
              <a className={layout.nav_link}>Behance</a>
              <a className={layout.nav_link}>Dribbble</a>
            </div>
          </div>
          <div className={layout.nav_wrapper}>
            <h3>Terms</h3>
            <div className={layout.nav_links}>
              <a className={layout.nav_link}>Privacy</a>
              <a className={layout.nav_link}>Cookies</a>
              <a className={layout.nav_link}>Licenses</a>
              <a className={layout.nav_link}>Settings</a>
              <a className={layout.nav_link}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <hr className={layout.divider_two} />
      <div className={layout.copyright}>© 2023 Italian Pizza</div>
    </Footer>
  );
};

export default PrimaryFooter;
