import { Container, Typography } from "@mui/material";
import Card from "../components/images/noun-payment-2836331.png";
import "./CreditCard.css";
function CreditCard() {
  return (
    <Container className="card-align">
      <img src={Card} width={400} height={300} className="card-img" />
      <Typography sx={{ fontSize: "large" }}>
        Внесете ја платежната картичка и напишете го пинот.
      </Typography>
    </Container>
  );
}

export default CreditCard;
