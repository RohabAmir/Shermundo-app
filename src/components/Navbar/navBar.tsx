
import React, { useState } from "react";

import SideBar from "../Sidebar/sideBar";

import Calendar from "@/src/assets/icons/Calendar";
import Hamburger from "@/src/assets/icons/Hamburger";
import Close from "@/src/assets/icons/Close";
import Logo from "@/src/assets/icons/Logo";

import styles from "./navBar.module.scss";



const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.leftNav}>
          <button className={styles.hamburgerBtn} onClick={toggleSidebar}>
            {sidebarOpen ? <Close /> : <Hamburger />}
          </button>
          <Logo />
        </div>
        <div className={styles.rightNav}>
          <Calendar />
          <span className={styles.date}>1/1/2024</span>
          <div className={styles.verticleLine}></div>
          <span className={styles.name}>John Doe</span>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={toggleSidebar}
          style={{ top: "96px" }} 
        ></div>
      )}
    </>
  
  );
};

export default NavBar;
