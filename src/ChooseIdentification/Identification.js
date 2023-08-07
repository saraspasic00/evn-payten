import { Container } from "@mui/material";
import "./Identification.css";
import CancelButton from "../components/CancelButton/CancelButton";
import CustomButton from "../components/HomeButton/Button";
import { useSelector } from "react-redux";
import EvnLogo from "../components/EvnLogo/EvnLogo";

function Identification() {
  const selectFrom = useSelector((state) => state.navigation.from);

  return (
    <Container maxWidth="xl" className="container-align">
      <CustomButton
        name=" Со скенирање на QR код"
        to="/index"
        from={selectFrom}
      ></CustomButton>
      <CustomButton
        name="Со внес на број на корисник"
        to="/index/usernumber"
        from={selectFrom}
      />
      <div className="btn">
        <CancelButton marginTop="50px" />
      </div>
    </Container>
  );
}

export default Identification;
