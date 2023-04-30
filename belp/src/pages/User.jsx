import React from "react";
import styles from "../css/User.module.css";
import userimg from "../assets/user.webp";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BathroomCard, Footer } from "../components";
import { bathrooms } from "../data/data";
import { FiArrowLeft } from "react-icons/fi";

export default function User() {
  const [selectPinned, setSelectPinned] = useState(true);
  const [selectReviewed, setSelectReviewed] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.imgContainer}>
        <img src={userimg} className={styles.userImg} />
      </div>
      <div className={styles.midSection}>
        <div className={styles.infoContainer}>
          <div className={styles.blueBox}></div>
          <div className={styles.userInfo}>
            <div className={styles.textInfo}>Username</div>
            <div className={styles.pw}>
              <div className={styles.textInfo}>Password</div>
            </div>
            <div className={styles.textInfo}>Change password</div>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.catBox}>
          <button
            onClick={() => {
              setSelectPinned(true);
              setSelectReviewed(false);
            }}
            className={selectPinned ? styles.catSelected : styles.catText}
          >
            Pinned
          </button>
          <button
            onClick={() => {
              setSelectReviewed(true);
              setSelectPinned(false);
            }}
            className={selectReviewed ? styles.catSelected : styles.catText}
          >
            Reviewed
          </button>
        </div>
      </div>
      <div className={styles.bathrooms}>
        {bathrooms.map((bathroom, i) => {
          return (
            <NavLink
              className={styles.bathroomClick}
              to={selectPinned ? "/info" : "/reviews"}
              state={{ bathroom: bathroom, prev: "/user" }}
              key={i}
            >
              <BathroomCard bathroom={bathroom} />
            </NavLink>
          );
        })}
      </div>
      <Footer />
      <NavLink to="/">
        <div className={styles.backContainer}>
          <div className={styles.backButton}>
            <FiArrowLeft className={styles.arrowLeft} size={33} />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
