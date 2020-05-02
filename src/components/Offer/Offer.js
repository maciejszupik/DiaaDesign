import React from "react";
import ContactForm from "./../ContactForm";
import Footer from "./../Footer";
import Header from "./../Header";
import { makeStyles } from "@material-ui/core/styles";
import List from "./List"
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '18px',
    width: '80%',
    margin: '0 auto',
    marginTop: '100px',
    "& h1": {
        textAlign: 'center'
    },
    "& p": {
        textAlign: 'center',
        lineHeight: 2
    }
  }
}));

function Offer() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Header />
        <div className={classes.root}>
          <h1>oferta</h1>
          <p>Działamy głównie na terenie Krakowa i małopolski, a także Zamościa, Lublina i Warszawy,
               jesteśmy też otwarci na realizację projektów w innych regionach Polski, czy zdalną formę współpracy.
               By w jak najlepszym stopniu sprostać twoim wymaganiom i potrzebom, proponujemy różne zakresy??</p>
        </div>
        <List />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Offer;
