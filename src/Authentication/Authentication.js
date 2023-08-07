import { Container, Typography } from "@mui/material";
import Keyboard from "../components/CustomKeyboard/Keyboard";
import "./Authentication.css";
function Authentication() {
  return (
    <Container className="auth-container">
      <Typography variant="h3" className="header">
        Пријава за е-фактура
      </Typography>
      <Typography
        style={{ textAlign: "center", fontSize: "20px", marginBottom: "20px" }}
      >
        Внесе е-маил или телефонски број и притиснете „Прати“, за да можеме да
        Ве контактираме во врска со вашето барање, во спортивно притиснете
        „Откажи“
      </Typography>
      <Keyboard />
    </Container>
  );
}

export default Authentication;
