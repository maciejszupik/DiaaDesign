import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px"
    },
    width: '100%',
    minWidth: '400px',
    height: '20vh',
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

   function Art4() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
         
          <p>
            ART 4
          </p> 
        </div>
    );
  }
export default Art4;