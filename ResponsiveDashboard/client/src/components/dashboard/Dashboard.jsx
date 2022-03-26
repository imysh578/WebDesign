import React, { useEffect } from 'react'
import { Searchbar } from './searchbar/Searchbar';
import { Dashcontent } from './dashcontent/Dashcontent';
import "./Dashboard.css"

export const Dashboard = () => {
  useEffect(() => {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector("nav");

    let getMenuStatus = localStorage.getItem("menu_status");
    if(getMenuStatus && getMenuStatus==="close") {
      sidebar.classList.toggle("close");
    }
  
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
      if(sidebar.classList.contains("close")) {
        localStorage.setItem("menu_status", "close")
      } else {
        localStorage.setItem("menu_status", "open")
      }
    })
  }, [])

  return (
    <section className="dashboard">
      <Searchbar/>
      <Dashcontent/>
    </section>
  );
}
