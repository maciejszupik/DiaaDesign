import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column"
  },
  step: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: '50px'
  },
  circle: {
    width: '40px',
    height: '40px',
    border: "1px solid black",
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function Art4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.step}>
        <div className={classes.circle}>1</div>
        <p>bla bla bla</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>2</div>
        <p>bla bla bla</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>3</div>
        <p>bla bla bla</p>
      </div>
    </div>
  );
}
export default Art4;
