import Image from "next/image";
import consentStyles from "./consent.module.scss";
import { Button, Link } from "@mui/material";
import { useCookies } from "react-cookie";

const CookieConsentModal = ({ initializeGA }) => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
    initializeGA();
  };

  const declineCookieConsent = () => {
    const sixMonthsInSeconds = 6 * 30 * 24 * 60 * 60;
    setCookie("cookieConsent", false, {
      path: "/",
      maxAge: sixMonthsInSeconds,
    });
  };

  return (
    <div className={consentStyles.consent_wrapper}>
      <Image width={200} height={100} src="/images/cookie.png" />
      <h2>Have a Cookie {":)"}</h2>
      <p>
        By clicking “Accept all cookies”, you agree Stack Exchange can store
        cookies on your device and disclose information in accordance with our {" "} 
        <Link href="/policy" >Cookie Policy</Link>.
      </p>
      <div className={consentStyles.btn_wrapper}>
        <Button
          onClick={() => giveCookieConsent()}
          className={consentStyles.primary_orange}
        >
          Accept Cookie
        </Button>
        <Button
          onClick={() => declineCookieConsent()}
          className={consentStyles.outline_orange}
        >
          Reject Non-essential
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentModal;
