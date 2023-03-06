import classes from "./moreInfoPopUp.module.css";

const MoreInfoPouUp = (props) => {
  return (
    <>
      <div className={classes.overlay} onClick={props.onClose} />
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className={classes.popUp}
      >
        <h2 className={classes.header}>{props.header}</h2>
        <p className={classes.text}>{props.text}</p>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
};

export default MoreInfoPouUp;
