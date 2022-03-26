import React from 'react'
import "./Searchbar.css"

export const Searchbar = () => {
  return (
    <div className="searchbar">
      <i class="uil uil-bars sidebar-toggle"></i>

      <div className="search-box">
        <i class="uil uil-search"></i>
        <input type="text" placeholder="Search here..." />
      </div>

      <img src="profile.jpg" alt="profile" />
    </div>
  );
}
