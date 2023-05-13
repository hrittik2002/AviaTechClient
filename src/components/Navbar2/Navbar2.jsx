import React from "react";
import styles from './Navbar2.module.css'
import { Link } from "react-router-dom";


const Navbar2 = () => {


  return (
    <>
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>AviaTech</div>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to="/fab">Fabrication</Link>
        <Link className={styles.navItem} to="/sub">SubAssembly</Link>
        <Link className={styles.navItem} to="/as">Assembly</Link>
        <Link className={styles.navItem} to="/forcast">Forcast</Link>
      </div>
    </div>
  
    </>
  );
};

export default Navbar2;