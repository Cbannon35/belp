/* Page for a user to create a review.. feel free to change file name */
import React from "react";
import styles from "../css/Review.module.css";
import { Footer, Rating, Sliders } from "../components";
import { NavLink } from "react-router-dom";
import { bathrooms } from "../data/data"
import { FiArrowLeft } from "react-icons/fi"

export const Review = () => {

  //just wanted to make sure styling is fine first so i'm pulling a sample bathroom
  const sampleBathroom = bathrooms[0];

  return (
    <>
      <NavLink to="/info">
        <div className={styles.backContainer}>
          <div className={styles.backButton}>
            <FiArrowLeft className={styles.arrowLeft} size={33}/>
          </div>
        </div>
      </NavLink>

        <div className={styles.upper}>
          <div className={styles.bathroomTitle}>{sampleBathroom.title}</div>
        </div>
        <div className={styles.ratingContainer}>
          <Rating rating={sampleBathroom.rating} type={"five"} className={styles.bathRate}/>
        </div>
        <div className={styles.slideDeez}>
          <Sliders rating={sampleBathroom.rating} />
        </div>
        <div className={styles.ReviewBox}>
          <input className={styles.reviewText} type="text" placeholder="rate deez..."/>
        </div>
        <div className = {styles.SubmitSection}>
        <button className={styles.submitButton}>Submit and Unlock Other Reviews!</button>
        </div>

      <Footer />
    </>
  );
};
