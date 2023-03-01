import classes from "./myProjects.module.css";
import omnifoodImage from "../images/omnifood.png";

const MyProject = () => {
  return (
    <div className={classes.content}>
      <div>
        <p className={classes.header}>My Projects</p>
      </div>
      <div className={classes.projects}>
        <div className={classes.project}>
          <img src={omnifoodImage} className={classes.img} />
          <p className={classes.projectHeader}>Omnifood</p>
          <p className={classes.aboutProject}>
            Project about food representation.
          </p>
          <p className={classes.aboutProject}>
            It is possible to order selected meals and enjoy in good food.
          </p>
          <div className={classes.buttons}>
            <button className={classes.button}>Live</button>
            <button className={classes.button}>Code</button>
          </div>
          <button className={classes.downButton}>More details. . .</button>
        </div>
        <div className={classes.project}>Project 2</div>
        <div className={classes.project}>Project 3</div>
        <div className={classes.project}>Project 4</div>
      </div>
    </div>
  );
};

export default MyProject;
