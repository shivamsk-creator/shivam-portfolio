import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

let App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Homepage />} />
          <Route path="/resume" exact={true} element={<Resume />} />
          <Route path="/projects" exact={true} element={<Projects />} />
          <Route path="/contact" exact={true} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

// "start": "BROWSER=none WDS_SOCKET_PORT=0 react-scripts start",
