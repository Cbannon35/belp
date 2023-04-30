/* Will display a particular bathroom's info */
/* The bathroom should be passed in as a 
refernce so we can render the correct info */
import React from "react";
import styles from "../css/Info.module.css";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Footer, Rating } from "../components";
import { FiArrowLeft } from "react-icons/fi";

export const Info = () => {
  const location = useLocation();
  const { state: { bathroom, prev } = {} } = location;

  return (
    <>
      <NavLink to="/info" state={{ bathroom: bathroom }}>
        <div className={styles.backContainer}>
          <div className={styles.backButton}>
            <FiArrowLeft className={styles.arrowLeft} size={33} />
          </div>
        </div>
      </NavLink>
      <div>
        {bathroom.image}
        <div>
          {bathroom.title}
          {bathroom.hours}
          <Rating rating={bathroom.rating} type={"five"} />
        </div>
      </div>
      <NavLink to="/info/review" state={{ bathroom: bathroom }}>
        <button>Write a Review</button>
      </NavLink>
      <Footer />
    </>
  );
};
