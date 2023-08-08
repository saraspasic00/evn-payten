import { Container, Typography } from "@mui/material";
import MyDataGrid from "../components/BillGrid/BillGrid";
import { useSelector } from "react-redux";
import Loading from "../LoadingPage/Loading";
import { useEffect, useState } from "react";
import data from "../components/data/data.json";

function Bills() {
  const select = useSelector((state) => state.userNumber.input);
  const [loading, setLoading] = useState(true);
  const brFak = data.filter((data) => data.brojFaktura == select);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      {loading === false ? (
        <Container>
          <Typography style={{ margin: "15px" }}>
            Број на корисник:
            <b>{select}</b>
          </Typography>
          <Typography style={{ margin: "15px" }}>
            Име на корисник: <b>{brFak.map((data) => data.ime)} </b>
          </Typography>
          <MyDataGrid />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Bills;
