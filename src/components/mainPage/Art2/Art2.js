import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        // height: '20vh',
        // minHeight: '250px'
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "15px",
        // height: '40vh',
        // minHeight: '300px'
      },
      marginTop: '100px',
      width: '100%',
      minWidth: '300px',
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

   function Art2() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
          <h1>diaa interior design</h1>
          <p>
            Przestrzeń w której żyjemy musi przede wszystkim nam służyć, dlatego też słuchamy naszych Klientów i tworzymy wnętrza 
            idealnie dopasowane do ich potrzeb i budżetu, a główną ideą przyświecającą wszystkim projektom 
            jest funkcjonalność połączona z estetyką. W naszej ofercie znajdziesz możliwość wyboru 
            pomiędzy różnymi pakietami usług od projektu koncepcyjnego, po projekt z nadzorem nad realizacją.
          </p> 
        </div>
    );
  }
export default Art2;