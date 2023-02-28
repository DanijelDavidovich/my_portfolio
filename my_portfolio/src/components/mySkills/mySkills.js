import classes from "./mySkills.module.css";
import htmlLogo from "../images/html.webp";
import cssLogo from "../images/css.webp";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
// import skillsWallpaper from "../images/skillWallpaper.jpg";

const MySkills = () => {
  return (
    <div className={classes.container}>
      <div className={classes.img}></div>
      <div className={classes.positions}>
        <div>
          <img className={classes.logo} src={htmlLogo} />
        </div>
        <div>
          <img className={classes.logo} src={cssLogo} />
        </div>
        <div>
          <img className={classes.logoJS} src={jsLogo} />
        </div>
        <div>
          <img className={classes.logoR} src={reactLogo} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
