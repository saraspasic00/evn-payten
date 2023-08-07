import { Typography } from "@mui/material";
import "./Loading.css";
import { NewtonsCradle } from "@uiball/loaders";

function Loading() {
  return (
    <div className="container">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
      <Typography className="text">Податоците се вчитуваат</Typography>
    </div>
  );
}

export default Loading;
