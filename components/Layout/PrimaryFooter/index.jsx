import layout from "../layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PrimaryFooter = ({ layoutData }) => {
  const router = useRouter();

  return (
    <footer className={`${layout.footer} custom-container`}>
      <div className={layout.nav_section}>
        <div className={layout.social_card}>
          <div onClick={() => router.push("/")} className={layout.footer_logo}>
            <Image
              src={"/logo/logo.svg"}
              width={120}
              height={112}
              alt="FooterLogo"
            />
          </div>
          <p>It is a long established fact that a reader will be.</p>
          <div className={layout.social_icons}>
            {layoutData.footer.social.map((data) => {
              return (
                <div
                  onClick={() => window.open(data.path)}
                  className={layout.social_icon}
                >
                  <Image
                    width={18}
                    height={18}
                    src={data.icon}
                    alt="facebook"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={layout.nav_container}>
          <div className={layout.nav_wrapper}>
            <h3>Company</h3>
            <div className={layout.nav_links}>
              <Link href="/" className={layout.nav_link}>
                Home
              </Link>
              <Link href="/about" className={layout.nav_link}>
                About
              </Link>
              <Link href="/menu" className={layout.nav_link}>
                Menu
              </Link>
              <Link href="/contact" className={layout.nav_link}>
                Contact US
              </Link>
            </div>
          </div>
          <div className={layout.nav_wrapper}>
            <h3>Social Media</h3>
            <div className={layout.nav_links}>
              {layoutData.footer.social.map((data) => {
                return (
                  <a target="_blank" href={data.path} className={layout.nav_link}>
                    {data.title}
                  </a>
                );
              })}
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
