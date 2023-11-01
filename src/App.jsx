import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStartPage } from "./Pages/GetStart";
import { Registration } from "./components/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStartPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
