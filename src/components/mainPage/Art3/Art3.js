import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '30vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      "& p": {
        width: '85%',
        margin: '0 auto',
        textAlign: 'center',
        lineHeight: 2
      }
    }
  });

   function Art3() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
          <h2>portfolio</h2>
          <p>
            Poniżej przedstawiamy część naszych projektów, więcej znajdziesz w zakładce PORTFOLIO
          </p> 
        </div>
    );
  }
export default Art3;