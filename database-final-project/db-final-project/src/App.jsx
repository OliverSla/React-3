import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import OneMovie from "./pages/OneMovie";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import MyMovie from "./pages/MyMovie";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/allMovies" element={<AllMovies />} />
            <Route path="/oneMovie" element={<OneMovie />} />
            <Route path="*" element={<Error />} />
          </Route>

          <Route path="/myMovie" element={<MyMovie />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
