import headerImage from "../images/header-photo.jpg";
import classes from "./header.module.css";
import { useState, useEffect } from "react";

const getScreenHeight = () => {
  console.log(window.innerWidth, window.innerHeight);
};

getScreenHeight();

const IntroHeader = () => {
  const [height, setHeight] = useState(window.innerHeight);
  // useEffect(() => {
  //   const handleHeight = () => {
  //     setHeight(window.innerHeight);
  //   };
  //   window.addEventListener("resize", handleHeight);
  // }, []);

  return (
    <img
      src={headerImage}
      alt="Header photo"
      className={classes.img}
      style={{ height: `${height}px` }}
    />
  );
};

export default IntroHeader;
