import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "12px"
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: "15px"
    // },
    fontSize: "18px",
    marginTop: '100px',
    marginBottom: '20px',
    width: '100%',
    // minWidth: '300px',
    // height: '20vh',
    // minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    "& p": {
      width: '85%',
      margin: '0 auto',
      textAlign: 'center',
      lineHeight: 2,
    }
  }
}));

   function Art3() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
          <h1>portfolio</h1>
          <p>
            Poniżej przedstawiamy część naszych projektów, więcej znajdziesz w zakładce PORTFOLIO
          </p> 
        </div>
    );
  }
export default Art3;