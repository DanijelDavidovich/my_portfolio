import classes from "./myProjects.module.css";
import omnifoodImage from "../images/omnifood.png";
import dentilImage from "../images/dentil.png";
import MyProject from "./myProject";

const MyProjects = () => {
  return (
    <div className={classes.content}>
      <div>
        <p className={classes.header}>My Projects</p>
      </div>
      <div className={classes.projects}>
        <MyProject
          img={omnifoodImage}
          header="Omnifood"
          shortAbout="Project about food representation. It is possible to order selected
          meals and enjoy in good food. It's single-page website built using
          HTML and CSS."
          linkLive="https://omnifood-pack.netlify.app"
        />

        <MyProject
          img={dentilImage}
          header="Dentil"
          shortAbout="Project made for a dental office. Makes a representation of the
          services of the doctor's office and an overview of busy and free
          appointments. It's single-page website built using HTML, CSS nad
          JavaScript."
          linkLive="https://denrilweb.netlify.app"
        />
      </div>
    </div>
  );
};

export default MyProjects;

// TEMPLATE FOR NEW PROJECTS

{
  /* <MyProject
          img={}
          header=""
          shortAbout=""
          linkLive ={}
          linkCode={}
          linkPopUp = {}
        /> */
}
