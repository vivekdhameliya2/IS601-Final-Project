import Image from "next/image";
import aboutStyles from "../../../assets/styles/about.module.scss";
import our_story from "../../../assets/images/our-story.png";

const OurStory = () => {
  return (
    <section className={`${aboutStyles.our_story} custom-container`}>
      <div className={aboutStyles.story_image}>
        <Image src={our_story} alt="story_image" />
      </div>
      <div className={aboutStyles.our_story_content}>
        <h3>Our Story</h3>
        <h2>The Story About Italian Pizza</h2>
        <div className={aboutStyles.journey}>
          <h5>Our Journey</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <hr />
        <div className={aboutStyles.journey}>
          <h5>Experience and food</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <hr />
        <div className={aboutStyles.journey}>
          <h5>Our Journey</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;