import IntroHeader from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";
import MySkills from "./components/mySkills/mySkills";
import MyProject from "./components/myProjects/myProjects";
import Footer from "./components/footer/footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <IntroHeader></IntroHeader>
      <AboutMe />
      <MySkills />
      <MyProject />
      <Footer />
    </Fragment>
  );
}

export default App;
