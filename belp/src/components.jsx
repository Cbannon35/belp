// A file to keep all of our reusable components
// Normally list items, or components that take props / bathroom info

import styles from "./css/components.module.css";
import { AiFillEnvironment } from "react-icons/ai";

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
        <img src={calculated_name}></img>
      </div>
    );
  }

  return (
    <div className={styles.type}>
      {type === "five" ? fiveToilets() : circleToilet()}
    </div>
  );
};

export const BathroomCard = ({ bathroom }) => {
  return (
    <div>
      <Rating rating={bathroom.rating} type={"circle"} />
      <div>
        <AiFillEnvironment />
        <div>{bathroom.title}</div>
        <div>{bathroom.hours}</div>
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
