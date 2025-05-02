import Header from "./component/header";
import Dashboard from "./component/dashboard";
import Attendance from "./component/Attendance";
import Payout from "./component/payout";
import Member from "./component/Member";
import Report from "./component/Report";
import Inventory from "./component/Inventory";
import Force from "./component/force";
import { BrowserRouter as Router, Routes, Route

 } from "react-router-dom";
export default function App() {
  return (
    <>
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" index element={<Force />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payout" element={<Payout />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/member" element={<Member />} />
          <Route path="/Inventory" element={<Inventory/>} />
          <Route path="/Member" element={< Member/>} />
          
        </Routes>
      </Router>
    </>
  );
}
