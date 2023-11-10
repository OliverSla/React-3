import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import OneMovie from "./components/OneMovie";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serials" element={<Serials />} />
            <Route path="all-movies/:movieID" element={<OneMovie />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
