import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh'
  }
});

function Art1() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}></div>
    </div>
  );
}

export default Art1;
