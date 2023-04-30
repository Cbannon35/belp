import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Loading from "./pages/loading";
import User from "./pages/User";
import { Info } from "./pages/Info";
import { Review } from "./pages/Review";
import { Reviews } from "./pages/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);
  const [loadscreen, setLoadscreen] = useState(true);

  // Display the loading screen for 5 seconds
  useEffect(() => {
    const id = setTimeout(() => {
      setLoadscreen(false);
    }, 5000);
    // return () => {
    //     clearTimeout(id)
    // }
  }, []);

  return (
    // <>
    //   {/* <code>
    //     <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
    //   </code> */}
    // </>
    <>
      {loadscreen ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            {/* <Route path="/info" Component={Info} /> */}
            <Route path="/info" element={<Info />} />
            <Route
              path="/info/review"
              element={(props) => <Review {...props} />}
            />
            <Route
              path="/info/reviews"
              element={(props) => <Reviews {...props} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
