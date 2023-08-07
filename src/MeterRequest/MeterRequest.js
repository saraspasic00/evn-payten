import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./MeterRequest.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function MeterRequest() {
  const meter = useSelector((state) => state.meters.meter);
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h4" className="title-request">
        Барање за повторен приклучок
      </Typography>
      <Typography variant="h3" className="details-request">
        Пред да донесете барање, Ве молиме осигурајте се дека долговите за
        мерното место со број <b> {meter} </b> се платени
      </Typography>
      <div className="btn-container">
        <Button
          className="btn-bills"
          sx={{
            backgroundColor: "#d2042d",
            width: "max-content",
          }}
          color={flag ? "inherit" : "error"}
          onClick={() => {
            setFlag(!flag);
            navigate("/index/bills");
          }}
        >
          Преглед на долгови
        </Button>
        <Button
          className="btn-continue"
          sx={{
            backgroundColor: "#d2042d",

            width: "max-content",
          }}
          color={flag ? "inherit" : "error"}
          onClick={() => {
            setFlag(!flag);
            navigate("/index/authentication");
          }}
        >
          Продолжи
        </Button>
      </div>
    </div>
  );
}

export default MeterRequest;
