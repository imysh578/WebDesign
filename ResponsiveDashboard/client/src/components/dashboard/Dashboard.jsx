import React, { useEffect } from 'react'
import { Searchbar } from './searchbar/Searchbar';
import { Contents } from './contents/Contents';
import "./Dashboard.css"

export const Dashboard = () => {
  useEffect(() => {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector("nav");
  
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    })
  })

  return (
    <section className="dashboard">
      <Searchbar/>
      <Contents/>
    </section>
  );
}
