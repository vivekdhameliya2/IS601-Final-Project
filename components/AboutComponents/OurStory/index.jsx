import Image from "next/image";
import aboutStyles from "../../../styles/about.module.scss";

const OurStory = ({ story }) => {
  return (
    <section className={`${aboutStyles.our_story} custom-container`}>
      <div className={aboutStyles.story_image}>
        <Image width={634} height={640} src={"/images/our-story.webp"} alt="story_image" />
      </div>
      <div className={aboutStyles.our_story_content}>
        <h3>{story.subTitle}</h3>
        <h2>{story.title}</h2>
        {story.stories.map((data, index) => {
          return (
            <>
              <div key={index} className={aboutStyles.journey}>
                <span>{data.title}</span>
                <p>
                  {data.desc}
                </p>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default OurStory;
