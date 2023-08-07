import { Typography } from "@mui/material";
import "./Unsuccessful.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Unsuccessful() {
  const navigate = useNavigate();
  const from = useSelector((state) => state.navigation.from);
  useEffect(() => {
    setTimeout(() => navigate("/index"), 6000);
  }, []);
  return (
    <Typography className="error-align">
      Системска грешка. Пријавата не е успешна. Ве молиме обидете се подоцна.
    </Typography>
  );
}

export default Unsuccessful;
