import { Card } from "@mui/material";
import menuStyles from "../../../../assets/styles/menu.module.scss";
import dealimage from "../../../../assets/images/deals-card-image.png";
import Image from "next/image";

const DealsCard = () => {
  return (
    <Card className={menuStyles.deal_card} sx={{ maxWidth: 405 }}>
      <div className={menuStyles.offer_content}>
        <div className={menuStyles.offer_text}>
          <h5>Flat</h5>
          <h2>$5.00</h2>
        </div>
        <div className={menuStyles.offer_label}>Code: FASTIV50%</div>
      </div>
      <Image src={dealimage} alt="Offer-image" />
    </Card>
  );
};

export default DealsCard;