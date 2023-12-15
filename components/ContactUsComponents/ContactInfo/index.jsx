import contactStyles from "../../../styles/contact.module.scss";
import Image from "next/image";

const ContactInfo = ({ contact }) => {
  return (
    <section className={`${contactStyles.contact_info} custom-container`}>
      {contact.contactInfo.map((data) => {
        return (
          <div className={contactStyles.info_wrapper}>
            <div className={contactStyles.info_icon}>
              <Image
                width={32}
                height={32}
                src={data.icon}
                alt="phone"
              />
            </div>
            <div className={contactStyles.info}>
              <span>{data.title}</span>
              <h5>{data.content}</h5>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ContactInfo;