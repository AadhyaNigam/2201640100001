import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import RedirectRouter from "./pages/RedirectRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/:id" element={<RedirectRouter />} />
      </Routes>
    </Router>
  );
}

export default App;