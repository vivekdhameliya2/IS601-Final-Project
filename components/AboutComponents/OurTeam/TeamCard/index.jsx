import { Card } from "@mui/material";
import Image from "next/image";
import teamStyle from "./teamCard.module.scss";

const TeamCard = ({item }) => {
  return (
    <Card className={teamStyle.team_card} sx={{ maxWidth: 278 }}>
      <Image src={item.image} width={279} height={312} alt="chef" />
      <div className={teamStyle.name_wrapper}>
        <h5>{item.fullname}</h5>
        <p>{item.position}</p>
      </div>
    </Card>
  );
};

export default TeamCard;
