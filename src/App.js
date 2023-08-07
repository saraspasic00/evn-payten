import { BrowserRouter, Route, Routes } from "react-router-dom";
import Identification from "./ChooseIdentification/Identification";
import UserNumber from "./UserNumber/UserNumber";
import Authentication from "./Authentication/Authentication";
import Meters from "./Meters/Meters";
import Home from "./Home/Home";
import "./App.css";
import Bills from "./Bills/Bills";
import Payment from "./Payment/Payment";
import Loading from "./LoadingPage/Loading";
import MeterRequest from "./MeterRequest/MeterRequest";
import Einvoice from "./EinvoiceAuth/Einvoice";
import Embg from "./Embg/Embg";
import Phone from "./Phone/Phone";
import Complete from "./SuccessfulAction/Complete";
import CreditCard from "./CreditCard/CreditCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/index" element={<Home />} />
        <Route path="/index/identification" element={<Identification />} />
        <Route path="/index/usernumber" element={<UserNumber />} />
        <Route path="/index/authentication" element={<Authentication />} />
        <Route path="/index/meters" element={<Meters />} />
        <Route path="/index/bills" element={<Bills />} />
        <Route path="/index/payment" element={<Payment />} />
        <Route path="/index/reactivate" element={<MeterRequest />} />
        <Route path="/index/invoice" element={<Einvoice />} />
        <Route path="/index/embg" element={<Embg />} />
        <Route path="/index/phone" element={<Phone />} />
        <Route path="/index/success" element={<Complete />} />
        <Route path="/index/card" element={<CreditCard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
