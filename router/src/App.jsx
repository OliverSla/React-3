import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="serials" element={<Serials />}></Route>
        <Route path="*" element={ <Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
