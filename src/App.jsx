import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import ForgotPassword from "./Pages/ForgotPassword";
import Header from "./Layouts/Header";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index path="/login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default App;
