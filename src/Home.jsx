import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Nav";
import "./Home.css";

function Home() {
  const cardNames = [
    "C",
    "Cp",
    "Python",
    "React",
    "js",
    "Css",
    "Html",
    "Mongo",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  const getVisibleCardsCount = () => {
    if (window.innerWidth < 600) return 2;
    return window.innerWidth < 990 ? 3 : 5;
  };

  useEffect(() => {
    const count = getVisibleCardsCount();
    const newVisibleCards = [];
    for (let i = 0; i < count; i++) {
      newVisibleCards.push(cardNames[(currentIndex + i) % cardNames.length]);
    }
    setVisibleCards(newVisibleCards);
  }, [currentIndex, cardNames]);

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCardsCount();
      const newVisibleCards = [];
      for (let i = 0; i < count; i++) {
        newVisibleCards.push(cardNames[(currentIndex + i) % cardNames.length]);
      }
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, cardNames]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardNames.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardNames.length) % cardNames.length
    );
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Profile/PreethamCV.pdf";
    link.download = "PreethamCV.pdf";
    link.click();
  };

  return (
    <div>
      <Navbar />
      <div className="Home">
        <div className="Image-container">
          <div className="background-image"></div>
        </div>
        <div className="Intro">
          Hi, Myself Preetham Battula
          <br />
          This site gives a brief intro about myself.
        </div>
        <div className="contact-links">
          <a
            href="mailto:preetham@kggpian.iitkgp.ac.in"
            className="iconholder mailholder"
          >
            <div className="mail-contact"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/preetham-battula-12a6342aa/"
            className="iconholder linkedinholder"
          >
            <div className="linkedin-contact" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100087577059615"
            className="iconholder facebookholder"
          >
            <div className="facebook-contact" />
          </a>
          <a
            href="https://www.instagram.com/preetham.battula/"
            className="iconholder instaholder"
          >
            <div className="instagram-contact" />
          </a>
        </div>
      </div>
      <div className="Expertise">
        <label className="Label" id="explabel">
          My Expertise
        </label>
        <div id="Holder">
          <button onClick={handlePrev} className="card-button bl">
            &lt;
          </button>
          <div className="card-holder">
            {visibleCards.map((name) => (
              <div key={name} className={`card ${name}`}>
                <div className="card-image"></div>
                <li className="Name"></li>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="card-button br">
            &gt;
          </button>
        </div>
      </div>
      <div className="Work">
        <label className="Label">My Work</label>
        <div className="work">
          <a
            className="work-ele"
            id="proj1"
            href="https://github.com/Snakemanp/SWProject.git"
          >
            <div className="overplay">
              SSFDS
              <br />A platform for Restaurants and Ngos
            </div>
          </a>
          <a className="work-ele" id="proj2" href="">
            <div className="overplay">
              ProfileSite
              <br />A Site to Introduce Myself
            </div>
          </a>
          <a
            className="work-ele"
            id="proj3"
            href="https://github.com/Snakemanp/Game1.git"
          >
            <div className="overplay">
              Mega-Man
              <br />A Game similar to mario without game engines.
            </div>
          </a>
          <a
            className="work-ele"
            id="proj4"
            href="https://github.com/Snakemanp/Huffman-Compression.git"
          >
            <div className="overplay">
              Huffman-Coding
              <br />A c++ code to compress and decode the data in .txt file
            </div>
          </a>
          <a
            className="work-ele"
            id="proj5"
            href="https://github.com/Snakemanp/Game1.git"
          >
            <div className="overplay">
              Geo-Wars
              <br />A Game Written by Me in C++ without game engine
            </div>
          </a>
        </div>
      </div>
      <div className="Bottom">
        <li className="b-Name">Preetham</li>
        <li className="text">
          Enthusiastic software engineer with a passion for building elegant
          solutions.
          <br /> Constantly seeking to expand my skills.
        </li>
        <div className="bottom-links">
          <a
            href="mailto:preetham@kggpian.iitkgp.ac.in"
            className="iconholder mailholder"
          >
            <div className="mail-contact"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/preetham-battula-12a6342aa/"
            className="iconholder linkedinholder"
          >
            <div className="linkedin-contact" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100087577059615"
            className="iconholder facebookholder"
          >
            <div className="facebook-contact" />
          </a>
          <a
            href="https://www.instagram.com/preetham.battula/"
            className="iconholder instaholder"
          >
            <div className="instagram-contact" />
          </a>
        </div>
        <button id="cv" onClick={handleDownload}>
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Home;
