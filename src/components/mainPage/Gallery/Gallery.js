import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    margin: "0 auto"
    
    }
}));


 
function Gallery() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]}
    dots={true}
    showSides={false}
    sidesOpacity={.3}
    sideSize={.1}
    slidesToScroll={1}
    slidesToShow={3}
    scrollOnDevice={true}
    incrementalSides={true}
  >
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/300x200'
      />
    </div>
  </InfiniteCarousel>
  </div>
  );
}

export default Gallery;