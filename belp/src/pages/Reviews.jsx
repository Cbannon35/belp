/* List of a bathroom's reviews */
export const Reviews = ({ bathroom }) => {
  return (
    <div>
      <NavLink to="/info">
        <div className={styles.backContainer}>
          <div className={syles.backButton}></div>
        </div>
      </NavLink>

      {bathroom.ratings.map((rating, index) => (
        <ReviewCard review={rating} key={index} />
      ))}

      <NavLink to="/">
        <div className={styles.mapContainer}>
          <div className={syles.mapButton}></div>
        </div>
      </NavLink>
    </div>
  );
};
