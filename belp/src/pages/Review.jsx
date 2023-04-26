/* Page for a user to create a review.. feel free to change file name */
import React from "react";
import styles from "../css/Review.module.css";

export const Review = () => {
  return (
    <>
      <NavLink to="/info">
        <div className={styles.backContainer}>
          <div className={syles.backButton}></div>
        </div>
      </NavLink>

      <NavLink to="/">
        <div className={styles.mapContainer}>
          <div className={syles.mapButton}></div>
        </div>
      </NavLink>
    </>
  );
};
