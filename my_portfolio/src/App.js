import IntroHeader from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import MySkills from "./components/mySkills/mySkills";
import MyProjects from "./components/myProjects/myProjects";
import Footer from "./components/footer/footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <IntroHeader></IntroHeader>
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Footer />
    </Fragment>
  );
}

export default App;
