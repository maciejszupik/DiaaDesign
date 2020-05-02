import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import Full from "./Full";
import Mobile from "./Mobile";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '18px',
    width: '80%',
    margin: '0 auto',
    marginTop: '100px',
    marginBottom: '30px',
    "& h2": {
      textAlign: 'center'
    }
  }
}));

function Art4() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <h2>
      jak wygląda proces projektowy?
      </h2>
    </div>
      <Hidden only={["md", "lg", "xl", "sm"]}>
        <Mobile />
      </Hidden>
      <Hidden only={["xs"]}>
        <Full />
      </Hidden>
    </>
  );
}
export default Art4;
