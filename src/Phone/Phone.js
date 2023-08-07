import { useSelector } from "react-redux";
import data from "../components/data/data.json";
import { Stack, Typography } from "@mui/material";
import KeypadPhone from "../components/KeypadPhone/KeypadPhone";
function Phone() {
  const selectFrom = useSelector((state) => state.navigation.from);
  const selector = useSelector((state) => state.userNumber.input);
  const brFak = data.filter((data) => data.brojFaktura == selector);
  return (
    <div>
      <Stack spacing={2} className="home">
        <Typography variant="h3">Внесете телефонски број</Typography>
        <div className="details-active">
          <Typography>Број на корисник: {selector}</Typography>{" "}
          <Typography>
            Име на корисник: {brFak.map((data) => data.ime)}
          </Typography>
        </div>
        <KeypadPhone from={selectFrom} />
      </Stack>
    </div>
  );
}

export default Phone;
