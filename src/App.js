import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Index from "./components/Home/Index";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/Index";
import Socialicons from "./components/socialicons/index";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Socialicons />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
