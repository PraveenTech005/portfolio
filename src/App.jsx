import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classic from "./Classic";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Classic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
