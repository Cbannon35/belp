/* Will display a particular bathroom's info */
/* The bathroom should be passed in as a 
refernce so we can render the correct info */
import React from "react";
import styles from "../css/Info.module.css";
import { NavLink } from "react-router-dom";
import { Footer } from "../components";

export const Info = (props) => {
  const bathroom = props.location.state.bathroom;
  console.log(bathroom);
  return (
    <div>
      {bathroom.title}
      <Footer />
    </div>
  );
};
