// A file to keep all of our reusable components
// Normally list items, or components that take props / bathroom info

import styles from "./css/components.module.css";
import { AiFillEnvironment } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Sliders = ({ rating }) => {
  return (
    <div>
      <div>Slider 1 {rating.cleanliness}</div>
      <div>Slider 2 {rating.privacy}</div>
      <div>Slider 3 {rating.accessibility}</div>
    </div>
  );
};

// Type is either "five" or "circle"
export const Rating = ({ rating, type }) => {
  const filled_toilet = "images/good_toilet.png";
  const clear_toilet = "images/bad_toilet.png";
  // lol what a name
  // will render a filled toilet or a clear toilet
  function fiveToilets() {
    <div>
      {Array(5)
        .fill(0)
        .map((_, index) => {
          return (
            <img
              src={index < rating ? filled_toilet : clear_toilet}
              key={index}
            ></img>
          );
        })}
    </div>;
  }
  function circleToilet() {
    let calculated_name = "images/belp" + rating.toString() + ".png";
    return (
      <div>
        <img src={calculated_name} className={styles.circleToilet}></img>
      </div>
    );
  }

  return <>{type === "five" ? fiveToilets() : circleToilet()}</>;
};

export const BathroomCard = ({ bathroom }) => {
  return (
    <div className={styles.bathroomCardContainer}>
      <Rating rating={bathroom.rating} type={"circle"} />
      <div>
        <div className={styles.bathroomCardInfo}>
          <AiFillEnvironment style={{ paddingRight: "10px" }} />
          <div>{bathroom.title}</div>
        </div>
        <div className={styles.bathroomCardHours}>{bathroom.hours}</div>
      </div>
    </div>
  );
};

export const ReviewCard = ({ review }) => {
  return (
    <div>
      <div>{review.user}</div>
      <div>
        <Sliders rating={review.slider_rating} />
        <Rating rating={review.rating} type={"five"} />
      </div>
      <div>{review.review}</div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* <img src="images/BELP.png" className={styles.footerLogo}></img>
      <div className={styles.footerText}>Made with 💩 by the Belp Team</div> */}
      <NavLink to="/">
        <img src="images/map.png" className={styles.footerMap}></img>
      </NavLink>
    </div>
  );
};
