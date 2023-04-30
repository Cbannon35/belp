/* Page for a user to create a review.. feel free to change file name */
import React from "react";
import styles from "../css/Review.module.css";
import { Footer, Rating, Sliders } from "../components";
import { NavLink, useLocation } from "react-router-dom";
import { bathrooms } from "../data/data";
import { FiArrowLeft } from "react-icons/fi";

export const Review = () => {
  //just wanted to make sure styling is fine first so i'm pulling a sample bathroom
  const location = useLocation();
  const { state: { bathroom } = {} } = location;
  console.log(bathroom);

  return (
    <>
      <NavLink to="/info" state={{ bathroom: bathroom, prev: "/" }}>
        <div className={styles.backContainer}>
          <div className={styles.backButton}>
            <FiArrowLeft className={styles.arrowLeft} size={33} />
          </div>
        </div>
      </NavLink>

      <div className={styles.upper}>
        <div className={styles.bathroomTitle}>{bathroom.title}</div>
      </div>
      <div className={styles.ratingContainer}>
        <Rating
          rating={bathroom.rating}
          type={"five"}
          className={styles.bathRate}
        />
      </div>
      <div className={styles.slideDeez}>
        <Sliders rating={bathroom.rating} />
      </div>
      <div className={styles.ReviewBox}>
        <input
          className={styles.reviewText}
          type="text"
          placeholder="rate deez..."
        />
      </div>
      <NavLink to="/reviews" state={{ bathroom: bathroom, prev: "/info" }}>
        <div className={styles.SubmitSection}>
          <button className={styles.submitButton}>
            Submit and Unlock Other Reviews!
          </button>
        </div>
      </NavLink>

      <Footer />
    </>
  );
};
