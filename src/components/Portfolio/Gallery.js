import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    marginBottom: '50px',
    fontSize: "18px",
    width: "100%",
    margin: "0 auto",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  element: {
    border: "1px solid black",
    borderRadius: '3px',
    width: "80%",
    height: "0",
    paddingBottom: "80%",
    margin: '0 auto',
    marginBottom: "30px",
    "& p":{
       marginTop: '80%',
       fontWeight: 'bold',
       textAlign: 'center',
       fontSize: '20px'
    }
  },
}));

function Gallery() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.element} style={{backgroundImage:'url(https://via.placeholder.com/500x500)', backgroundSize: 'cover'}}><p>KUCHNIA</p></div>
          </Grid>
          
        </Grid>
      </div>
    </>
  );
}

export default Gallery;
