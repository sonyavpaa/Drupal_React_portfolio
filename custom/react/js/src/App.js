import React from "react";
import LayOut from "./pages/LayOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
