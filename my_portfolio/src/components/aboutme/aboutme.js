import classes from "./aboutme.module.css";
import myImage from "../images/me.jpg";

const AboutMe = () => {
  return (
    <div className={classes.position}>
      <div className={classes.text}>
        <h1>About me</h1>
        <p>
          Motivated and dedicated person who wants consistently learn and
          constantly perfecting yourself.Ready for new challenges and achieving
          a new success.Highly organized,team oriented and skilled in
          communication and collaboration
        </p>
      </div>
      <div className={classes.imgContainer}>
        <img src={myImage} className={classes.img} />
      </div>
    </div>
  );
};

export default AboutMe;
