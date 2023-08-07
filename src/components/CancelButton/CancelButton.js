import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CancelButton(props) {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
    navigate("/index");
  };
  return (
    <Button
      sx={{
        backgroundColor: "#d2042d",
        marginTop: props.marginTop,
        width: "max-content",
      }}
      color={flag ? "inherit" : "error"}
      onClick={handleClick}
    >
      Откажи
    </Button>
  );
}
export default CancelButton;
