import { useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Foter from "./components/5-foter/Foter";

function App() {
  return (
    <div className="Contener">
      <Header />
      {/* <div className="devader" /> */}
      <Hero />
      <div className="devader" />
      <Main />
      <div className="devader" />
      <Contact />
      <div className="devader" />
      <Foter />
    </div>
  );
}

export default App;
