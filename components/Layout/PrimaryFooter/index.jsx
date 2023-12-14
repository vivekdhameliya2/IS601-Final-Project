import layout from "../layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PrimaryFooter = () => {
  const router = useRouter();

  return (
    <footer className={`${layout.footer} custom-container`}>
      <div className={layout.nav_section}>
        <div className={layout.social_card}>
          <div onClick={() => router.push('/')} className={layout.footer_logo}>
            <Image src={"/logo/logo.svg"} width={120} height={112} alt="FooterLogo" />
          </div>
          <p>It is a long established fact that a reader will be.</p>
          <div className={layout.social_icons}>
            <div className={layout.social_icon}>
              <Image width={18} height={18} src={"/images/facebook.svg"} alt="facebook" />
            </div>
            <div className={layout.social_icon}>
              <Image width={18} height={18} src={"/images/instagram.svg"} alt="instagram" />
            </div>
            <div className={layout.social_icon}>
              <Image width={18} height={18} src={"/images/linkedin.svg"} alt="linkedin" />
            </div>
            <div className={layout.social_icon}>
              <Image width={18} height={18} src={"/images/youtube.svg"} alt="youtube" />
            </div>
            <div className={layout.social_icon}>
              <Image width={18} height={18} src={"/images/twitter.svg"} alt="twitter" />
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