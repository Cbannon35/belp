/* Will display a particular bathroom's info */
/* The bathroom should be passed in as a 
refernce so we can render the correct info */
import React from "react";

export const Info = ({ bathroom }) => {
  return (
    <div>
      <NavLink to="/">
        <div className={styles.backContainer}>
          <div className={syles.backButton}></div>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className={styles.mapContainer}>
          <div className={syles.mapButton}></div>
        </div>
      </NavLink>
    </div>
  );
};
