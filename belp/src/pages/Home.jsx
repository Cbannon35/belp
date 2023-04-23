import React from "react"
import styles from '../css/Home.module.css'
import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import user from '../assets/user.webp'


export default function Home() {
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.searchBar}>
            <FiSearch className={styles.searchIcon}/>
            <input className={styles.search} type="text"/>
          </div>
          <button className={styles.buttonContainer}>
            <img src={user} className={styles.userButton}/>
          </button>
      </div>
    </div>
  )
}
