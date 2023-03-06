import classes from "./myProjects.module.css";
import { useState } from "react";
import omnifoodImage from "../images/omnifood.png";
import dentilImage from "../images/dentil.png";
import forkifyImage from "../images/forkify.png";
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
          shortAbout="My final project from the subject 'Software Design' from the third year of the Faculty of Electrical Engineering, Banja Luka. The project was created using HTML, CSS and JavaScript."
          text="After creating the complete documentation, in the course 'Software Design' we started, as a team, to create the software itself. I was assigned to create the front-end part of the project, and this is the result of my work. The project was created using the skills acquired during the HTML/CSS course and the JavaScript course. Calendar functionality is done in JavaScript."
          linkLive="https://denrilweb.netlify.app"
          time={1000}
          delay={1000}
          fadeDirection="fade-left"
        />

        <MyProject
          img={forkifyImage}
          header="Forkify"
          shortAbout="Final project on the course: 'The Complete JavaScript Course: From Zero to Expert!'"
          text="Most of the HTML and CSS part of the project was done by the author, so the focus was almost exclusively on JavaScript. Through the development of the project, everything that was previously done individually throughout the entire course was applied. Creating the project included many things starting from the basics of JS, through how JS works in the background, what is JS engine and runtime, how DOM and Events work, CSS manipulation through JS, OOP JS, promises, async/await, AJAKS, fetch API, handling errors, modules, tooling, etc. The application allows you to search for recipes from the author's database, view the details of the selected recipe, save recipes (saved on the local store), enter your own recipes and send them to the database, etc."
          linkLive="https://forkify-v1-app.netlify.app"
          time={1000}
          delay={1000}
          fadeDirection="fade-right"
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
          linkLive =""
          linkCode=""
          time={1000}
          delay={1000}
          fadeDirection=""
        /> */
}
