import { useEffect, useState } from "react";
import Loading from "../LoadingPage/Loading";
import { Container, Typography } from "@mui/material";
import Visa from "../components/images/Visa.png";
import MasterCard from "../components/images/MasterCard.png";
import DinersClub from "../components/images/DinersClub.png";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { Margin } from "@mui/icons-material";
function Payment() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      {loading === false ? (
        <Container className="container-align">
          <Typography style={{ marginBottom: "15px" }}>
            Избери начин на плаќање
          </Typography>
          <div>
            <div className="btn1" onClick={() => navigate("/index/card")}>
              <img src={Visa} width={200} height={100} />
              <br></br>
              <img src={MasterCard} width={200} height={100} />
            </div>
            <div className="btn2" onClick={() => navigate("/index/card")}>
              <img src={DinersClub} width={400} height={200} />
            </div>
          </div>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Payment;
