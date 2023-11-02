import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetStartPage } from "./Pages/GetStart";
import { Registration } from "./components/Registration/Registration";
import { FormPage } from "./Pages/FormPage";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GetStartPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/form-page" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
