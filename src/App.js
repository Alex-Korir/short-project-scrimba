import React from "react";
import "./App.css";
import Information from "./components/info";
import About from "./components/About";

function App() {
  return (
    <>
      <section className="sectionOne">
        <Information />
        <About />
      </section>
    </>
  );
}

export default App;
