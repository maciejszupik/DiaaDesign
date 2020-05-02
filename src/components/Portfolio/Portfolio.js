import React from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '18px',
    width: '80%',
    margin:'0 auto',
    minHeight: '100vh'

  }
}));

function Portfolio() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Header />
        <div className={classes.root}>
          PORTFOLIO
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
