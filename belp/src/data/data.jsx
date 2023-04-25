// normally this would be done on the backend?
// but for now lets have a local database

// SLIDERS LOGIC
function sliderConstructor(cleanliness, privacy, accessibility) {
  return {
    cleanliness: cleanliness,
    privacy: privacy,
    accessibility: accessibility,
  };
}
// not actually applicable, since slider ratings live in reviews
// but we can use it later for ratings!
export const slider_ratings = [
  sliderConstructor(5, 5, 5),
  sliderConstructor(4, 4, 4),
  sliderConstructor(3, 3, 3),
  sliderConstructor(2, 2, 2),
  sliderConstructor(1, 1, 1),
];

// RATINGS LOGIC
function ratingConstructor(user, rating, slider_rating, review) {
  return {
    user: user,
    rating: rating,
    slider_rating: slider_rating,
    review: review,
  };
}

export const ratings = [
  ratingConstructor("user1", 5, slider_ratings[0], "this is a review"),
  ratingConstructor("user2", 4, slider_ratings[1], "this is a review"),
  ratingConstructor("user3", 3, slider_ratings[2], "this is a review"),
  ratingConstructor("user4", 2, slider_ratings[3], "this is a review"),
  ratingConstructor("user5", 1, slider_ratings[4], "this is a review"),
];

// BATHROOM LOGIC
function bathroomConstructor(title, hours, location, ratings) {
  function computeRating(ratings) {
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
      sum += ratings[i].rating;
    }
    return sum / ratings.length;
  }

  return {
    //also need bathroom image
    title: title,
    hours: hours,
    rating: computeRating(ratings),
    ratings: ratings,
  };
}

export const bathrooms = [
  bathroomConstructor("Bathroom 1", "9am-5pm", ratings),
  bathroomConstructor("Bathroom 2", "9am-5pm", ratings),
];
