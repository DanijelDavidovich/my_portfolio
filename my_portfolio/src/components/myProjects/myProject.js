import classes from "./myProjects.module.css";
import { Fragment, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MoreInfoPouUp from "./moreInfoPopUp";

const MyProject = (props) => {
  const fade = props.fadeDirection;
  const delay = props.delay;
  const time = props.time;
  // useEffect(() => {
  //   Aos.init({ duration: props.time });
  // }, []);
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <div
        data-aos={fade}
        data-aos-duration={time}
        data-aos-delay={delay}
        className={classes.project}
      >
        <img src={props.img} className={classes.img} />
        <p className={classes.projectHeader}>{props.header}</p>
        <p className={classes.aboutProject}>{props.shortAbout}</p>
        <div className={classes.buttons}>
          <a className={classes.button} href={props.linkLive} target="_blank">
            Live
          </a>
          <a className={classes.button}>Code</a>
        </div>
        <button className={classes.downButton} onClick={showCartHandler}>
          More details. . .
        </button>
      </div>
      {cartIsShown && <MoreInfoPouUp header={props.header} text={props.text} onClose={hideCartHandler}/>}
    </div>
  );
};

export default MyProject;
