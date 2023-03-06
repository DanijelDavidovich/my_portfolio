import classes from "./myProjects.module.css";
import { useState } from "react";
import omnifoodImage from "../images/omnifood.png";
import dentilImage from "../images/dentil.png";
import MyProject from "./myProject";
import Aos from "aos";
import "aos/dist/aos.css";

const MyProjects = () => {
  Aos.init();
  return (
    <div className={classes.content}>
      <div>
        <p className={classes.header}>My Projects</p>
      </div>

      <div className={classes.projects}>
        <MyProject
          img={omnifoodImage}
          header="Omnifood"
          shortAbout="Final project on the course: 'Building responsive real-world website with HTML and CSS'"
          text="The creation process included the plan and design of the project, designing each individual layout, then creating them using HTML and CSS, from navigation, inserting and managing images, colors, icons, text, buttons, forms, links, and everything to the footer. Creating different layouts using float, felx-box and CSS grid. Several CSS animations are also implemented."
          linkLive="https://omnifood-pack.netlify.app"
          time={1000}
          delay={500}
          fadeDirection="fade-right"
        />

        <MyProject
          img={dentilImage}
          header="Dentil"
          shortAbout="Final project from the subject 'Software Design' from the third year of the Faculty of Electrical Engineering, Banja Luka. The project was created using HTML, CSS and JavaScript."
          text="After creating the complete documentation, in the course 'Software Design' we started, as a team, to create the software itself. I was assigned to create the front-end part of the project, and this is the result of my work. The project was created using the skills acquired during the HTML/CSS course and the JavaScript course. Calendar functionality is done in JavaScript."
          linkLive="https://denrilweb.netlify.app"
          time={1000}
          delay={1000}
          fadeDirection="fade-left"
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
