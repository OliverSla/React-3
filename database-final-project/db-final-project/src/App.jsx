import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AllMovies from './pages/AllMovies'
import OneMovie from './pages/OneMovie'
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allMovies" element={<AllMovies />} />
          <Route path="/oneMovie" element={<OneMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
