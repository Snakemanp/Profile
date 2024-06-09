import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Dropdown } from "bootstrap";

function Navbar() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    console.log("currentpath:", currentPath);
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
      console.log(link.classList);
    });
    console.log(document.querySelectorAll("active"));
  }, [window.location.pathname]);

  return (
    <div className="navigbar">
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        style={{ Top: "0px", width: "100vw" }}
      >
        <div
          class="container-fluid"
          style={{
            marginTop: "0px",
            height: "80px",
          }}
        >
          <li
            class="navbar-brand"
            style={{ listStyle: "none", color: "white" }}
          >
            Preetham
          </li>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/Profile/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Profile/cv/">
                  Profile
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/Projects"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Projects
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "black" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/Snakemanp/SWProject.git"
                    >
                      Project 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/Snakemanp/Profile.git"
                    >
                      Project 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://github.com/Snakemanp/Game1.git"
                    >
                      Project 3
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Profile/contact/">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
