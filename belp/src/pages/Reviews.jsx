/* List of a bathroom's reviews */
import React from "react";
import styles from "../css/Reviews.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Footer, ReviewCard } from "../components";
import { FiArrowLeft } from "react-icons/fi";

export const Reviews = () => {
  const location = useLocation();
  const { state: { bathroom, prev } = {} } = location;

  return (
    <div>
      <NavLink to={prev} state={{ bathroom: bathroom, prev: "/" }}>
        <div className={styles.backContainer}>
          <div className={styles.backButton}>
            <FiArrowLeft className={styles.arrowLeft} size={33} />
          </div>
        </div>
      </NavLink>

      {bathroom.ratings.map((rating, index) => (
        <ReviewCard review={rating} key={index} />
      ))}

      <Footer />
    </div>
  );
};
