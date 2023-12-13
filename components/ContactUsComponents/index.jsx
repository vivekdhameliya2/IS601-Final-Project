import dynamic from "next/dynamic";
import contactStyles from "../../assets/styles/contact.module.scss";
import { useMemo } from "react";
import { Button, TextField } from "@mui/material";
import { Input } from "@mui/base";

const ContactUsForm = ({ contact }) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./CustomMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <section className={`${contactStyles.form_container} custom-container`}>
      <div className={contactStyles.form_wrapper}>
        <h2>{contact.title}</h2>
        <Input placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input placeholder="Subject Type" />
        <TextField sx={{maxWidth: 595}} rows={4} multiline placeholder="Enter your message here..." />
        <Button>Submit Now</Button>
      </div>
      <div className={contactStyles.form_map}>
        <Map />
      </div>
    </section>
  );
};

export default ContactUsForm;
