import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Loading from "./pages/loading";

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

  return <>{loadscreen ? <Loading /> : <Home />}</>;
}

export default App;
