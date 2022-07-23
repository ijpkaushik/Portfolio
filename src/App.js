import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, ProjectPage } from "./pages";
import { BackToTop } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/projects" exact element={<ProjectPage />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
