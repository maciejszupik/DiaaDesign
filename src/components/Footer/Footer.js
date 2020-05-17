import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import DiaaLogo from "./diaa_logo.png";
import Instagram from "@material-ui/icons/Instagram";
import Pinterest from "@material-ui/icons/Pinterest";
import Facebook from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "180px",
    background: "#050d18",
    fontSize: "13px",
    color: "#ffffff",
  },
  footer: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    "& > ul": {
      listStyleType: "none",
      "& > li": {
        lineHeight: "25px",
      },
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  social: {
    minWidth: "150px",
    "& > ul": {
      listStyleType: "none",
      "& > li": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
  link: {
    color: 'white'
  },
  legal: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontSize: "10px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.footer}>
        <Grid item xs={12} container direction="row" justify="space-around">
          <div className={classes.logo}>
            <img src={DiaaLogo} alt="logo" width="158" height="80" />
          </div>

          <Hidden only={["sm", "xs"]}>
            <div className={classes.menu}>
              <ul>
                <li>
                  <NavLink className={classes.link} to="/">
                    STRONA GŁÓWNA
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.link} to="/Offer">
                    OFERTA
                  </NavLink>
                </li>
                <li>
                  <NavLink className={classes.link} to="/Portfolio">
                    PORTFOLIO
                  </NavLink>
                </li>
                {/* <li>BLOG</li> */}
                <li>
                  <NavLink className={classes.link} to="/Contact">
                    KONTAKT
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={classes.social}>
              <ul>
                <li>
                  <Link href="#" target="_blank" color="inherit">
                    <Facebook style={{ fontSize: 22 }} />
                  </Link>
                  <p>facebook&nbsp;&nbsp;</p>
                </li>
                <li>
                  <Link href="#" target="_blank" color="inherit">
                    <Instagram style={{ fontSize: 22 }} />
                  </Link>
                  <p> instagram</p>
                </li>
                <li>
                  <Link href="#" target="_blank" color="inherit">
                    <Pinterest style={{ fontSize: 22 }} />
                  </Link>
                  <p>pinterest&nbsp;&nbsp;</p>
                </li>
              </ul>
            </div>
          </Hidden>
        </Grid>
      </div>

      {/* <div className={classes.legal}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <p>&copy; DIAA DESIGN 2020. All Rights Reserved.</p>
          </Grid>
          <Grid item xs={6}>
            <p>Polityka Prywatności</p>
          </Grid>
        </Grid>
        </div> */}
    </div>
  );
}
export default Footer;
