import React from "react";
import styles from "../css/Home.module.css";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import user from "../assets/user.webp";
import { bathrooms } from "../data/data";
import { BathroomCard } from "../components";

// google maps
import { Loader } from "@googlemaps/js-api-loader";
import { GOOGLE_MAPS_API_KEY } from "../../config.json";
const loader = new Loader({
  apiKey: GOOGLE_MAPS_API_KEY,
  version: "weekly",
});

let map;
export default function Home() {
  useEffect(() => {
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.8719, lng: 122.2585 },
        zoom: 8,
      });
    });
    /* Below is to make the map on the user location */
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       };

    //       infoWindow.setPosition(pos);
    //       infoWindow.setContent("Location found.");
    //       infoWindow.open(map);
    //       map.setCenter(pos);
    //     },
    //     () => {
    //       handleLocationError(true, infoWindow, map.getCenter());
    //     }
    //   );
    // } else {
    //   // Browser doesn't support Geolocation
    //   handleLocationError(false, infoWindow, map.getCenter());
    // }
  }, []);

  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input className={styles.search} type="text" />
        </div>
        <button className={styles.buttonContainer}>
          <img src={user} className={styles.userButton} />
        </button>
      </div>

      <div className={styles.mapContainer}>
        <div id="map" className={styles.map}></div>
      </div>

      <div className={styles.bathroomContainer}>
        {bathrooms.map((bathroom, i) => {
          return <BathroomCard bathroom={bathroom} key={i} />;
        })}
      </div>
    </div>
  );
}
