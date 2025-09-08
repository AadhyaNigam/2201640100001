import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";
import RedirectRouter from "./pages/RedirectRouter";

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Shortener
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Statistics
          </Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "2rem" }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
          <Route path="/:code" element={<RedirectRouter />} />
        </Routes>
      </Container>
    </Router>
  );
}