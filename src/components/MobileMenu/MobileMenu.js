import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Instagram from "@material-ui/icons/Instagram";
import Pinterest from "@material-ui/icons/Pinterest";
import Facebook from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  mobileList: {
    fontSize: 15,
    "& ul": {
      listStyleType: "none",
      "& li": {
        marginTop: "50px"
      }
    }
  },
  sidebarSocials: {
    height: '100%',
    marginLeft: '-40px',
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'flex-end',
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
      "& li": {
        marginLeft: '5%',
        marginRight: '5%'
      }
    }
  }
});

function MobileMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    />
  );

  return (
    <div>
      <MenuIcon
        onClick={toggleDrawer("right", true)}
        style={{ fontSize: 45 }}
      />
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
        <div className={classes.mobileList}>
          <ul>
            <li>STRONA GŁÓWNA</li>
            <li>OFERTA</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>KONTAKT</li>
          </ul>
        </div>
        <div className={classes.sidebarSocials}>
          <ul>
            <li>
              <Link href="#" target="_blank" color="inherit">
                <Facebook style={{ fontSize: 20 }} />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" color="inherit">
                <Instagram style={{ fontSize: 20 }} />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" color="inherit">
                <Pinterest style={{ fontSize: 20 }} />
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
export default MobileMenu;
