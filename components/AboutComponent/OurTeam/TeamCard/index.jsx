import { Card } from "@mui/material";
import Image from "next/image";
import chef from "../../../../assets/images/chef1.png";
import teamStyle from "./teamCard.module.scss";

const TeamCard = () => {
  return (
    <Card className={teamStyle.team_card} sx={{ maxWidth: 278 }}>
      <Image src={chef} alt="chef" />
      <div className={teamStyle.name_wrapper}>
        <h5>Jayvion Simon</h5>
        <p>Senior Chef</p>
      </div>
    </Card>
  );
};

export default TeamCard;