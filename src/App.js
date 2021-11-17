import HeaderNav from "./components/layout/HeaderNav";
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from "../src/pages/Home";
import CartPage from "../src/pages/CartPage";

function App() {

  return (
    <div className="flex flex-row">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
