import "./EvnLogo.css";
import Evn from "../images/New-Logo-Color.bmp";
function EvnLogo() {
  return (
    <div className="evn-logo">
      <img src={Evn} width={150} height={60} />
    </div>
  );
}

export default EvnLogo;
