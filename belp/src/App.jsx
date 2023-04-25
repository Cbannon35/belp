import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Loading from "./pages/loading";
import User from "./pages/User"
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  return <>{
    loadscreen ? <Loading /> : 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    }</>;
}

export default App;
