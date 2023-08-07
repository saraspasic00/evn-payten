import { InputLabel, Stack, Typography } from "@mui/material";
import "./UserNumber.css";
import Keypad from "../components/KeypadUsername/Keypad";
import { useSelector } from "react-redux";
import EvnLogo from "../components/EvnLogo/EvnLogo";
import Evn from "../components/images/New-Logo-Color.bmp";
function UserNumber() {
  const selectFrom = useSelector((state) => state.navigation.from);

  return (
    <div>
      <form>
        <Stack spacing={2} className="home">
          <Typography variant="h3">Внеси фактура</Typography>
          <Keypad from={selectFrom} />
        </Stack>
      </form>
    </div>
  );
}

export default UserNumber;
