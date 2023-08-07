import { Container, Typography } from "@mui/material";
import "./Complete.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Complete() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const from = useSelector((state) => state.navigation.from);
  useEffect(() => {
    setTimeout(() => navigate("/index"), 6000);
  }, []);
  return (
    <Container className="messages-align">
      {from == "/index/authentication" && (
        <Typography variant="h3" className="message">
          Вашето барање за повторен приклучок е проследено за обработка до
          службите на ЕВН. Ве молиме земете ја потврдата за Вашето барање.
        </Typography>
      )}
      {from == "/index/phone" && (
        <>
          <Typography className="message" variant="h2">
            Ви благодариме за пријавата
          </Typography>
          <Typography className="message" variant="h3">
            Вашата пријава е успешна
          </Typography>
        </>
      )}
    </Container>
  );
}

export default Complete;
