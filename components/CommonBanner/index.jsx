import aboutStyles from "../../styles/about.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

const Seprator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="4"
      viewBox="0 0 5 4"
      fill="none"
    >
      <circle cx="2.5" cy="2" r="2" fill="#DFE3E8" />
    </svg>
  );
};

const CommonBanner = ({ title, breadcrumbs }) => {
  return (
    <section className={aboutStyles.hero_section}>
      <div className={aboutStyles.overlay_image}>
        <h2>{title}</h2>
        <Breadcrumbs
          className={aboutStyles.breadCrumbClass}
          separator={<Seprator />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
    </section>
  );
};

export default CommonBanner;
