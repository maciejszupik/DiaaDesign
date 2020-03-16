import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column"
  },
  step: {
    fontSize: '15px',
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: '50px',
    "& p": {
      marginLeft: '20px'
    }
  },
  circle: {
    // position: 'relative',
    top: '10px',
    width: '60px',
    height: '60px',
    border: "1px solid black",
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function Art4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.step}>
        <div className={classes.circle}>1</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis vulputate dolor, nec lobortis lacus ullamcorper eget. Morbi molestie, metus in consectetur posuere, quam dui gravida purus, sit amet malesuada ligula justo id magna. Etiam posuere tincidunt scelerisque. Sed justo elit, tincidunt sit amet odio a, viverra luctus arcu. Aenean facilisis posuere felis, nec convallis ligula lacinia ut. Vestibulum dictum risus sed quam convallis fermentum. Sed ac tempor lorem.</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>2</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis vulputate dolor, nec lobortis lacus ullamcorper eget. Morbi molestie, metus in consectetur posuere, quam dui gravida purus, sit amet malesuada ligula justo id magna. Etiam posuere tincidunt scelerisque. Sed justo elit, tincidunt sit amet odio a, viverra luctus arcu. Aenean facilisis posuere felis, nec convallis ligula lacinia ut. Vestibulum dictum risus sed quam convallis fermentum. Sed ac tempor lorem.</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>3</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis vulputate dolor, nec lobortis lacus ullamcorper eget. Morbi molestie, metus in consectetur posuere, quam dui gravida purus, sit amet malesuada ligula justo id magna. Etiam posuere tincidunt scelerisque. Sed justo elit, tincidunt sit amet odio a, viverra luctus arcu. Aenean facilisis posuere felis, nec convallis ligula lacinia ut. Vestibulum dictum risus sed quam convallis fermentum. Sed ac tempor lorem.</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>4</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis vulputate dolor, nec lobortis lacus ullamcorper eget. Morbi molestie, metus in consectetur posuere, quam dui gravida purus, sit amet malesuada ligula justo id magna. Etiam posuere tincidunt scelerisque. Sed justo elit, tincidunt sit amet odio a, viverra luctus arcu. Aenean facilisis posuere felis, nec convallis ligula lacinia ut. Vestibulum dictum risus sed quam convallis fermentum. Sed ac tempor lorem.</p>
      </div>
      <div className={classes.step}>
        <div className={classes.circle}>5</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis vulputate dolor, nec lobortis lacus ullamcorper eget. Morbi molestie, metus in consectetur posuere, quam dui gravida purus, sit amet malesuada ligula justo id magna. Etiam posuere tincidunt scelerisque. Sed justo elit, tincidunt sit amet odio a, viverra luctus arcu. Aenean facilisis posuere felis, nec convallis ligula lacinia ut. Vestibulum dictum risus sed quam convallis fermentum. Sed ac tempor lorem.</p>
      </div>
    </div>
  );
}
export default Art4;
