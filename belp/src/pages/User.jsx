import React from "react";
import styles from "../css/User.module.css";
import userimg from "../assets/user.webp";
import { NavLink } from "react-router-dom";

export default function User() {
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
        <div className={styles.pinnedBox}>
          <div className={styles.catText}>Pinned</div>
        </div>
        <div className={styles.reviewBar}>
          <div className={styles.catText}>Reviewed</div>
        </div>
      </div>
      <div className={styles.bathrooms}></div>
      <NavLink to="/">
        <button className={styles.backContainer}>
          <img src={""} className={styles.backButton} />
        </button>
      </NavLink>
    </div>
  );
}
