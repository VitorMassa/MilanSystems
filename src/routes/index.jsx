import React from "react";
import { Route, Routes } from "react-router-dom";

import DashBoard from "../views/dashboard";
import RegisterBill from "../views/registerbill";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/registro" element={<RegisterBill />} />
    </Routes>
  );
}
