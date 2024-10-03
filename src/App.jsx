import { useState } from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Footer />
  )
  // <Header />
  // <Outlet />;
  // <Footer />
  // )
}

export default App;
