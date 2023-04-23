import React from "react";
import styled from "styled-components";

const b1 = "images/belp1.png";
const b2 = "images/belp2.png";
const b3 = "images/belp3.png";
const b4 = "images/belp4.png";
const b5 = "images/belp5.png";
const b6 = "images/belp6.png";

const LoadingContainer = styled.div`
  animation: changeBg 5s;
  animation-timing-function: ease-in-out;

  background-repeat: no-repeat;
  background-position: center;

  width: 400px;
  height: 400px;

  @keyframes changeBg {
    0% {
      background-image: url(${b1});
    }
    20% {
      background-image: url(${b2});
    }
    40% {
      background-image: url(${b3});
    }
    60% {
      background-image: url(${b4});
    }
    80% {
      background-image: url(${b5});
    }
    100% {
      background-image: url(${b6});
    }

    -webkit-transition: background-image 1s ease-in-out;
    transition: background-image 1s ease-in-out;
  }
`;

export default function Loading() {
  return <LoadingContainer />;
}
