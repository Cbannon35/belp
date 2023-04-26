import React from "react";
import styles from "../css/User.module.css"
import userimg from "../assets/user.webp"

export default function User() {
  return (
    <div className={styles.page}>
      <div className={styles.imgContainer}>
        <img src={userimg} className={styles.userImg}/>
      </div>
      <div className={styles.midSection}>
        <div className={styles.infoContainer}>
          <div className={styles.blueBox}>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.textInfo}>
              Username
            </div>
            <div className={styles.pw}>
              <div>Password</div>
            </div>
            <div className={styles.textInfo}>
              Change password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
