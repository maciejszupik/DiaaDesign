import React from "react";
import ContactForm from "./../ContactForm";
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

function Contact() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Header />
        
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
