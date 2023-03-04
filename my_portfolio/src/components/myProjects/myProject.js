import classes from "./myProjects.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MyProject = (props) => {
  const fade = props.fadeDirection;
  useEffect(() => {
    Aos.init({ duration: props.time });
  }, []);
  return (
    <div data-aos={fade} className={classes.project}>
      <img src={props.img} className={classes.img} />
      <p className={classes.projectHeader}>{props.header}</p>
      <p className={classes.aboutProject}>{props.shortAbout}</p>
      <div className={classes.buttons}>
        <a className={classes.button} href={props.linkLive} target="_blank">
          Live
        </a>
        <a className={classes.button}>Code</a>
      </div>
      <button className={classes.downButton}>More details. . .</button>
    </div>
  );
};

export default MyProject;
