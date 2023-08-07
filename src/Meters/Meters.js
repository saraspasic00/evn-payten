import { Container } from "@mui/material";

import CancelButton from "../components/CancelButton/CancelButton";
import ActiveMeters from "../components/ActiveMeters/ActiveMeters";
import { useSelector } from "react-redux";
import InactiveMeters from "../components/InactiveMeters/InactiveMeters";

function Meters() {
  const from = useSelector((state) => state.navigation.from);
  return (
    <div>
      <Container className="container-align">
        {from == "baranjePriklucok" ? <InactiveMeters /> : <ActiveMeters />}
        <div className="btn">
          <CancelButton />
        </div>
      </Container>
    </div>
  );
}

export default Meters;
