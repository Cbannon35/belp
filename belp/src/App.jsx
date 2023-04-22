import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import "./App.css";

function Loading() {
  return (
    <>
      <p>loading!</p>
    </>
  );
}

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

  return <>{loadscreen ? <Loading /> : <p>loaded!</p>}</>;
}

export default App;
