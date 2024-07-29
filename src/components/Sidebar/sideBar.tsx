import React from "react";
import { sidebarLinks, SidebarLink } from "../../utils/index";
import styles from "./sideBar.module.scss";
import Logout from "@/src/assets/icons/Logout";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sideBarContainer}>
        {sidebarLinks.map((link: SidebarLink) => (
          <div key={link.name} className={styles.sideBarItem}>
            {link.icon}
            <span className={styles.sideBarItemName}>{link.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
