import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import DiaaLogo from "./diaa_logo.png";
import Instagram from "@material-ui/icons/Instagram";
import Pinterest from "@material-ui/icons/Pinterest";
import Facebook from "@material-ui/icons/Facebook";
import Link from '@material-ui/core/Link';
import MobileMenu from '../MobileMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    color: "white",
    marginTop: "3vh",
    position: 'fixed',
    top: 0
  },
  headerLogo: {
    minWidth: "40%",
    display: "flex",
    alignItems: "center",
    marginLeft: "5%"
  },
  headerSocial: {
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '10%',
  },
  phone: {
    display: "flex",
    alignItems: "center",
    fontWeight: 500,
    fontSize: '18px'
  },
  headerMenu: {
    display: "flex",
    alignItems: "center",
    marginRight: '5%'
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12} container direction="row" justify="space-between">
        <div className={classes.headerLogo}>
          <img src={DiaaLogo} alt="logo" />
        </div>

        <Hidden only={["xs"]}>
          <div className={classes.phone}>t.: +48 793 691 570</div>
          <div className={classes.headerSocial}>
          <Link href="#" target="_blank" color='inherit'>
            <Facebook style={{ fontSize: 30 }}/>
          </Link>
          <Link href="#" target="_blank" color='inherit'>
            <Instagram style={{ fontSize: 30 }}/>
            </Link>
            <Link href="#" target="_blank" color='inherit'>
            <Pinterest style={{ fontSize: 30 }}/>
            </Link>
          </div>
        </Hidden>
        <div className={classes.headerMenu}>
            <MobileMenu />
        </div>
      </Grid>
      
    </div>
  );
}

export default Header;
