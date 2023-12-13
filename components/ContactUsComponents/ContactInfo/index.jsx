import contactStyles from "../../../assets/styles/contact.module.scss";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <section className={`${contactStyles.contact_info} custom-container`}>
      <div className={contactStyles.info_wrapper}>
        <div className={contactStyles.info_icon} >
        <Image width={32} height={32} src={"/images/phone-fill.svg"} alt="phone" />
        </div>
        <div className={contactStyles.info}>
          <span>Phone Number</span>
          <h5>+1 25314 58965</h5>
        </div>
      </div>
      <div className={contactStyles.info_wrapper}>
      <div className={contactStyles.info_icon} >
        <Image width={32} height={32} src={"/images/map-pin-fill.svg"} alt="phone" />
        </div>
        <div className={contactStyles.info}>
          <span>Phone Number</span>
          <h5>+1 25314 58965</h5>
        </div>
      </div>
      <div className={contactStyles.info_wrapper}>
      <div className={contactStyles.info_icon} >
        <Image width={32} height={32} src={"/images/mail-open-fill.svg"} alt="phone" />
        </div>
        <div className={contactStyles.info}>
          <span>Phone Number</span>
          <h5>+1 25314 58965</h5>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
