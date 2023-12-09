import contactStyles from "../../../assets/styles/contact.module.scss";
import phone from "../../../assets/images/phone-fill.svg";
import map from "../../../assets/images/map-pin-fill.svg";
import mail from "../../../assets/images/mail-open-fill.svg";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <section className={`${contactStyles.contact_info} custom-container`}>
      <div className={contactStyles.info_wrapper}>
        <div className={contactStyles.info_icon} >
        <Image src={phone} alt="phone" />
        </div>
        <div className={contactStyles.info}>
          <span>Phone Number</span>
          <h5>+1 25314 58965</h5>
        </div>
      </div>
      <div className={contactStyles.info_wrapper}>
      <div className={contactStyles.info_icon} >
        <Image src={map} alt="phone" />
        </div>
        <div className={contactStyles.info}>
          <span>Phone Number</span>
          <h5>+1 25314 58965</h5>
        </div>
      </div>
      <div className={contactStyles.info_wrapper}>
      <div className={contactStyles.info_icon} >
        <Image src={mail} alt="phone" />
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
