import { Card } from "@mui/material";
import menuStyles from "../../../../styles/menu.module.scss";
import Image from "next/image";

const DealsCard = ({ item }) => {
  
  return (
    <Card className={menuStyles.deal_card} sx={{ maxWidth: 405 }}>
      <div className={menuStyles.offer_content}>
        <div className={menuStyles.offer_text}>
          <span>Flat</span>
          <h2>${+(item.discount).toFixed(2)}</h2>
        </div>
        <div className={menuStyles.offer_label}>Code: {item.code}</div>
      </div>
      <Image height={259} width={259} src={item.image} alt="Offer-image" />
    </Card>
  );
};

export default DealsCard;
