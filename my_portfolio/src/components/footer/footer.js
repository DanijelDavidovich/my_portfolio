import "./footer.module.css";

import classes from "./footer.module.css";
import logo from "../images/logo.png";
import {
  FaFacebookSquare,
  FaMailBulk,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.signeture}>
        <img src={logo} className={classes.logo} />
        <p className={classes.copyright}>
          Copyright &copy; 2023 by Danijel Davidovic,
        </p>
        <p className={classes.copyright}>Inc. All rights reserved.</p>
      </div>
      <div>
        {/* <h3 className={classes.contact}>Contact me</h3> */}
        <div className={classes.contact_me_content}>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100004350573540"
              className={classes.icons_text}
            >
              <FaFacebookSquare className={classes.icons} />
              <p className={classes.text}>Facebook</p>
            </a>
          </div>
          <div>
            <a className={classes.icons_text} href="#">
              <FaMailBulk className={classes.icons} />{" "}
              <p className={classes.text}>danijeldavidovic1995@gmail.com</p>
            </a>
          </div>
          <div>
            <div className={classes.icons_text}>
              <FaPhoneAlt className={classes.icons} />{" "}
              <p className={classes.text}>065/898-678</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.icons_2}>
        <a
          className={classes.links}
          href="https://www.linkedin.com/in/danijel-davidović-0a84b1228/"
        >
          <FaLinkedin className={classes.icon_2} />
        </a>
        <a
          className={classes.links}
          href="https://github.com/DanijelDavidovich"
        >
          <FaGithub className={classes.icon_2} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
