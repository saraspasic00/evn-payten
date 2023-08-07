import { Container, Typography } from "@mui/material";

import InvoiceKeyboard from "../components/InvoiceKeyboard/InvoiceKeyboard";
import { useSelector } from "react-redux";
import "./Einvoice.css";
import data from "../components/data/data.json";
function Einvoice() {
  const selector = useSelector((state) => state.userNumber.input);
  const brFak = data.filter((data) => data.brojFaktura == selector);
  return (
    <Container className="container-invoice">
      <Typography variant="h3" className="header">
        Пријава за е-фактура
      </Typography>
      <Typography
        style={{ textAlign: "center", fontSize: "20px", marginBottom: "20px" }}
      >
        Внесе е-маил каде сакате да Ви пристигнуваат фактурите
      </Typography>
      <div className="details-active">
        <Typography>
          Број на корисник: <b>{selector}</b>
        </Typography>{" "}
        <Typography>
          Име на корисник:<b>{brFak.map((data) => data.ime)}</b>
        </Typography>
      </div>
      <InvoiceKeyboard />
    </Container>
  );
}

export default Einvoice;
