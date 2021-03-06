import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";

export default function Main() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About />
      <Contacts />
    </div>
  );
}
