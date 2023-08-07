import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import data from "../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { meterActions } from "../../store/MeterSlice";
import "./ActiveMeters.css";

function ActiveMeters(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userNumber.input);
  const from = useSelector((state) => state.navigation.from);
  const handleNavigation = (event) => {
    event.preventDefault();
    let meter = event.currentTarget.value;
    dispatch(meterActions.selectedMeter(meter));
    navigate("/index/bills");
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        palette: {
          background: {
            default: "white",
          },
          text: {
            primary: "black",
          },
        },
        styleOverrides: {
          root: {
            height: "60px",
            width: "100vh",
            backgroundColor: "white",
            color: "black",
            marginBottom: "10px",
            display: "grid",
          },
        },
      },
    },
  });
  let listItems = [];

  const brFak = data.filter((data) => data.brojFaktura == selector);

  listItems = brFak.map((data) => (
    <li key={data.id}>
      {
        (listItems = data.mernoMesto?.aktivni?.map((mernomesto, index) => (
          <ThemeProvider theme={theme}>
            <Button key={index} onClick={handleNavigation} value={mernomesto}>
              <span>
                {" "}
                Мерно место <b> {mernomesto} </b> Броило <b> {data.broilo}</b>
              </span>
            </Button>
          </ThemeProvider>
        )))
      }
    </li>
  ));

  return (
    <Container>
      <Typography variant="h4" className="title-active">
        Плаќање на долгови
      </Typography>
      <div className="details-active">
        <Typography>
          Број на корисник: <b> {selector}</b>
        </Typography>{" "}
        <Typography>
          Име на корисник: <b>{brFak.map((data) => data.ime)}</b>
        </Typography>
      </div>
      <ul style={{ listStyleType: "none" }}>{listItems}</ul>
    </Container>
  );
}

export default ActiveMeters;
