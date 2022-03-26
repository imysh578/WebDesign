import React, { useEffect } from 'react'
import "./Navbar.css"

export const Navbar = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    const modeToggle = document.querySelector(".mode-toggle");
  
    modeToggle.addEventListener("click", () => {
      body.classList.toggle("dark")
    })
  })
  return (
    <nav>
      <div className="logo-name-container">
        <div className="logo-image">
          <img src="Musit_logo.png" alt="logo" />
        </div>

        <span className="logo-name">MUSIT</span>
      </div>

      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <a href="/">
              <i class="uil uil-estate"></i>
              <span className="link-name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="uil uil-files-landscapes"></i>
              <span className="link-name">Content</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="uil uil-chart"></i>
              <span className="link-name">Analystics</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="uil uil-thumbs-up"></i>
              <span className="link-name">Like</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="uil uil-comment-dots"></i>
              <span className="link-name">Comments</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="uil uil-share"></i>
              <span className="link-name">Share</span>
            </a>
          </li>
        </ul>

        <ul className="logout-mode">
          <li>
            <a href="/">
              <i class="uil uil-signout"></i>
              <span className="link-name">Logout</span>
            </a>
          </li>

          <li className="mode">
            <a href="/">
              <i class="uil uil-moon"></i>
              <span className="link-name">Dark Mode</span>
            </a>
            <div className="mode-toggle">
              <span className="switch"></span>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
}
