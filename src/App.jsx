import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RankPage  from "./pages/RankPage.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rankpage" element={ <RankPage /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
