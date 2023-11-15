import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import OneMovie from "./pages/OneMovie";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Form from './pages/Form'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/allMovies" element={<AllMovies />} />
            <Route path="/oneMovie/:movieID" element={<OneMovie />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
