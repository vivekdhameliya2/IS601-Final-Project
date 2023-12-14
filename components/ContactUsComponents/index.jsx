import dynamic from "next/dynamic";
import contactStyles from "../../styles/contact.module.scss";
import { useMemo, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Input } from "@mui/base";

const CustomAlert = dynamic(() => import("../CustomAlert"));

const ContactUsForm = ({ contact }) => {
  const [alert, setAlert] = useState({ open: false, message: "", type: "" });
  const Map = useMemo(
    () =>
      dynamic(() => import("./CustomMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setAlert({
      open: true,
      message: "Your query has been submitted successfully.",
      type: "success",
    });
    e.target.reset();
  };

  const alertClose = () => {
    setAlert({ open: false, message: "", type: "" });
  };

  return (
    <section className={`${contactStyles.form_container} custom-container`}>
      <form onSubmit={onSubmit} className={contactStyles.form_wrapper}>
        <h2>{contact.title}</h2>
        <Input required aria-labelledby="name" placeholder="Name" />
        <Input
          required
          aria-labelledby="email"
          type="email"
          placeholder="Email"
        />
        <Input
          required
          aria-labelledby="subject_type"
          placeholder="Subject Type"
        />
        <TextField
          required
          aria-labelledby="message"
          sx={{ maxWidth: 595 }}
          rows={4}
          multiline
          placeholder="Enter your message here..."
        />
        <Button type="submit">Submit Now</Button>
      </form>
      <div className={contactStyles.form_map}>
        <Map />
      </div>
      {alert.open && <CustomAlert data={alert} handleClose={alertClose} />}
    </section>
  );
};

export default ContactUsForm;