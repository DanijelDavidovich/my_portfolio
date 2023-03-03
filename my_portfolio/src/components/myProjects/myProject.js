import classes from "./myProjects.module.css";

const MyProject = (props) => {
  return (
    <div className={classes.project}>
      <img src={props.img} className={classes.img} />
      <p className={classes.projectHeader}>{props.header}</p>
      <p className={classes.aboutProject}>{props.shortAbout}</p>
      <div className={classes.buttons}>
        <a className={classes.button} href={props.linkLive}>
          Live
        </a>
        <a className={classes.button}>Code</a>
      </div>
      <button className={classes.downButton}>More details. . .</button>
    </div>
  );
};

export default MyProject;
