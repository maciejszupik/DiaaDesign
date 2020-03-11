import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';


 
function Gallery() {
  
  return (
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://via.placeholder.com/400x300'
      />
    </div>
  </InfiniteCarousel>
  );
}

export default Gallery;