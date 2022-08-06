import React from "react";
import "./About.css";

const About = () => {
  let url = "";
  return (
    <main className="container">
      <header className="fields">
        <h1>Laura Smith</h1>
        <p>FrontEnd Developer</p>
        <a href={url}>laurasmith.website</a>
        <button className="email">Email</button>
      </header>
      <div className="portfolio">
        <h3>About</h3>
        <p>
          About I am a frontend developer with a particular interest in making
          things simple and automating daily tasks. I try to keep up with
          security and best practices, and am always looking for new things to
          learn.
        </p>
      </div>
      <header className="portfolio">
        <h3>Intrests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </header>
    </main>
  );
};

export default About;
