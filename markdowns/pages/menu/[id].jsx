import { Box, Modal, Button, TextField } from "@mui/material";
import mailStyles from "./mail.module.scss";
import Image from "next/image";
import { useState } from "react";
import ReactGA from "react-ga4";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailChimp = ({ open, handleClose, handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const onSubmit = (subscribe) => {
    ReactGA.event({
      category: "Mailchimp",
      action: "mailchimp_submit",
      label: "Email",
      value: email,
    });
    if (isEmailValid && email) {
      setEmail("");
      setIsEmailValid(true);
      subscribe({ EMAIL: email });
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <MailchimpSubscribe
      url={process.env.MAIL_CHIMP_URL}
      render={({ subscribe, status, message }) => {
        return (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={mailStyles.pop_container}>
              <div className={mailStyles.mail_left}>
                <h3>Summer</h3>
                <h2>Offer</h2>
                <h5>Save up to</h5>
                <span>
                  30<sup>%</sup>
                </span>
                <h6>In Stores & Online</h6>
              </div>
              <div className={mailStyles.mail_right}>
                <Image
                  onClick={() => handleClose()}
                  className={mailStyles.close_icon}
                  width={24}
                  height={24}
                  src="/images/close.svg"
                  alt="close"
                />
                <h5>Subscribe to our newsletter & receive a coupon</h5>

                <TextField
                  variant="outlined"
                  fullWidth
                  value={email}
                  style={{ width: "100%" }}
                  onChange={handleEmailChange}
                  error={!isEmailValid}
                  helperText={!isEmailValid ? "Invalid email address" : ""}
                />
                <Button
                  disabled={!isEmailValid || status === "sending"}
                  onClick={() => onSubmit(subscribe, status)}
                >
                  {status === "sending" ? "...sending" : "Subscribe"}
                </Button>

                {status === "error" && (
                  <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && handleSubmit()}
                <p onClick={() => handleClose()}>No thanks</p>
              </div>
            </Box>
          </Modal>
        );
      }}
    />
  );
};

export default MailChimp;