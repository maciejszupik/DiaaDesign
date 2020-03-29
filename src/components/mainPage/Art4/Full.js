import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '50px',
    color: 'black'
  }
}));

function Full() {
  const { Step } = Steps;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Steps direction="vertical" >
        <Step
        status="process"
          title="Finishdded"
          description="This is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description."
        />
        <Step
        status="process"
          title="In Progress"
          description="This isThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a description a description."
        />
        <Step
        status="process"
          title="Waiting"
          description="This is a dThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionescription."
        />
        <Step
        status="process"
          title="Waiting"
          description="This is a dThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionescription."
        />
        <Step
        status="process"
          title="Waiting"
          description="This is a dThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionescription."
        />
        <Step
        status="process"
          title="Waiting"
          description="This is a dThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionescription."
        />
      </Steps>
    </div>
  );
}

export default Full;
