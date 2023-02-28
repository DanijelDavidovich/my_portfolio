import headerImage from "../images/header-image.jpg";

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
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img src={headerImage} alt="Header photo" className={classes.img} />
        <div>
          <h1 className={classes.headding}>Hallo, my name is Danijel</h1>
        </div>
        <div className={classes.subheadding_block}>
          <div className={classes.subheadding_container}>
            <h1 className={classes.subheadding}>I'm a Front-End Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
