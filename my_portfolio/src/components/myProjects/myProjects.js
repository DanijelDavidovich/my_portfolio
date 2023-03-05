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
          shortAbout="Project about food representation. It is possible to order selected
          meals and enjoy in good food. It's single-page website built using
          HTML and CSS."
          text="Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!\n Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.\n Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!"
          linkLive="https://omnifood-pack.netlify.app"
          time={1000}
          delay={500}
          fadeDirection="fade-right"
        />

        <MyProject
          img={dentilImage}
          header="Dentil"
          shortAbout="Project made for a dental office. Makes a representation of the
          services of the doctor's office and an overview of busy and free
          appointments. It's single-page website built using HTML, CSS nad
          JavaScript."
          linkLive="https://denrilweb.netlify.app"
          time={1000}
          delay={1000}
          fadeDirection="fade-left"
        />

        <MyProject
          img={omnifoodImage}
          header="Omnifood"
          shortAbout="Project about food representation. It is possible to order selected
          meals and enjoy in good food. It's single-page website built using
          HTML and CSS."
          linkLive="https://omnifood-pack.netlify.app"
          time={1000}
          delay={500}
          fadeDirection="fade-right"
        />

        <MyProject
          img={dentilImage}
          header="Dentil"
          shortAbout="Project made for a dental office. Makes a representation of the
          services of the doctor's office and an overview of busy and free
          appointments. It's single-page website built using HTML, CSS nad
          JavaScript."
          linkLive="https://denrilweb.netlify.app"
          time={1000}
          delay={1000}
          fadeDirection="fade-left"
        />
        <MyProject
          img={omnifoodImage}
          header="Omnifood"
          shortAbout="Project about food representation. It is possible to order selected
          meals and enjoy in good food. It's single-page website built using
          HTML and CSS."
          linkLive="https://omnifood-pack.netlify.app"
          time={1000}
          delay={500}
          fadeDirection="fade-right"
        />
        <MyProject
          img={dentilImage}
          header="Dentil"
          shortAbout="Project made for a dental office. Makes a representation of the
          services of the doctor's office and an overview of busy and free
          appointments. It's single-page website built using HTML, CSS nad
          JavaScript."
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
