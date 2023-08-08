import { Container, Typography } from "@mui/material";
import CustomButton from "../components/HomeButton/Button";
import "./Home.css";
import Loading from "../LoadingPage/Loading";

import EvnLogo from "../components/EvnLogo/EvnLogo";

function Home() {
  return (
    <Container className="containerAlign">
      <Typography variant="h3" className="header">
        Избери услуга
      </Typography>
      <CustomButton
        name="Преглед на долгови"
        to="/index/identification"
        from="dolgovi"
      />
      <CustomButton
        name="Плаќање на сметки"
        from="plakjanjeSmetki"
        to="/index/identification"
      />

      <CustomButton
        name="Барање за повторен приклучок"
        from="baranjePriklucok"
        to="/index/identification"
      />
      <CustomButton
        name="Брза пријава на Е-фактура"
        from="efakturi"
        to="/index/identification"
      />
    </Container>
  );
}

export default Home;
