import dynamic from "next/dynamic";
import contactStyles from "../../styles/contact.module.scss";
import { useMemo, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Input } from "@mui/base";
import ReactGA from "react-ga4";

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
    const formData = new FormData(e.target);
    const email = formData.get("email");

    ReactGA.event({
      category: "Contact Form",
      action: "contacts_form_submit",
      label: "Email",
      value: email,
    });
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
        <h2 data-testid="contact-form-title">{contact.title}</h2>
        <Input
          data-testid="contact-form-item"
          required
          aria-labelledby="name"
          name="name"
          placeholder="Name"
        />
        <Input
          data-testid="contact-form-item"
          required
          aria-labelledby="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          name="subjectType"
          data-testid="contact-form-item"
          required
          aria-labelledby="subject_type"
          placeholder="Subject Type"
        />
        <TextField
          data-testid="contact-form-item"
          required
          aria-labelledby="message"
          sx={{ maxWidth: 595 }}
          rows={4}
          multiline
          name="query"
          placeholder="Enter your message here..."
        />
        <Button data-testid="contact-form-button" type="submit">
          Submit Now
        </Button>
      </form>
      <div className={contactStyles.form_map}>
        <Map />
      </div>
      {alert.open && <CustomAlert data={alert} handleClose={alertClose} />}
    </section>
  );
};

export default ContactUsForm;