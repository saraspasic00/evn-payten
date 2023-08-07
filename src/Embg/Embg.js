import { InputLabel, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import KeypadEmbg from "../components/KeypadEmbg/KeypadEmbg";
import data from "../components/data/data.json";
import "./Embg.css";
function Embg() {
  const selectFrom = useSelector((state) => state.navigation.from);
  const selector = useSelector((state) => state.userNumber.input);
  const brFak = data.filter((data) => data.brojFaktura == selector);
  return (
    <div>
      <Stack spacing={2} className="home">
        <Typography variant="h3">Внесете матичен број</Typography>
        <div className="details-active">
          <Typography>
            Број на корисник: <b>{selector}</b>
          </Typography>{" "}
          <Typography>
            Име на корисник:<b>{brFak.map((data) => data.ime)}</b>
          </Typography>
        </div>
        <KeypadEmbg from={selectFrom} />
      </Stack>
    </div>
  );
}

export default Embg;
