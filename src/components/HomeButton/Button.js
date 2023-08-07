import { useNavigate } from "react-router-dom";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { navigateActions } from "../../store/navigationSlice";

function CustomButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigation = () => {
    navigate(props.to, { state: props.from });
    dispatch(navigateActions.navigateTo(props.to));
    dispatch(navigateActions.navigateFrom(props.from));
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
            fontSize: "20px",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button name={props.name} onClick={handleNavigation}>
        {props.name}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
