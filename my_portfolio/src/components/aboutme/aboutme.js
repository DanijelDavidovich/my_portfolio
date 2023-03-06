import classes from "./aboutme.module.css";
import myImage from "../images/me.jpg";

const AboutMe = () => {
  return (
    <div className={classes.position}>
      <div className={classes.text}>
        <h1>About me</h1>
        <p>
          I am a beginner to junior front-end developer with about one year of
          experience. I have taken several advanced courses on HTML, CSS,
          JavaScript and ReactJS and related projects. Also, based on what I
          learned, I did several independent projects. I'm motivated and
          dedicated person who wants constantly learn and constantly perfecting
          myself in this field, ready for new challenges. Currently, I am
          looking for an internship or job to hone and improve my skills.
        </p>
      </div>
      <div className={classes.imgContainer}>
        <img src={myImage} alt="my photo" className={classes.img} />
      </div>
    </div>
  );
};

export default AboutMe;
