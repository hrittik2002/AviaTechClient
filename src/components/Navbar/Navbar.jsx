import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {


  return (
    <>
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>AviaTech</div>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to="/">login</Link>
        <Link className={styles.navItem} to="/search">register</Link>
      </div>
    </div>
  
    </>
  );
};

export default Navbar;