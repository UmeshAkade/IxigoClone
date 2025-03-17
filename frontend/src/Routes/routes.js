import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Correct import path for Profile.js
import Profile from "../Pages/Home.js";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
