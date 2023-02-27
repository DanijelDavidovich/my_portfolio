import IntroHeader from "./components/header/header";
import AboutMe from "./aboutme/aboutme";
import MySkills from "./components/mySkills";
import MyProject from "./components/myProjects";
import Footer from "./components/footer";
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
