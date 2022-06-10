import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PhotoCarousel = () => {
  return (
    <div id='' className='max-w-[1240px] mx-auto py-20 md:pt-[5rem]'>

      <h3 className='text-center text-2xl md:text-3xl pb-4'>I've a therapist</h3>
      <h3 className='text-center text-2xl md:text-5xl pb-8'>her name is MUSIC</h3>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="mx-auto md:rounded-2xl"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <img className='w-full object-cover' src='https://source.unsplash.com/2awzIErSaG0' />
        <img className='w-full object-cover' src='https://source.unsplash.com/bJ2Dm9ZyeIY' />
        <img className='w-full object-cover' src='https://source.unsplash.com/GO1i2timuug' />
        <img className='w-full object-cover' src='https://source.unsplash.com/1zwJqd5cNys' />
        <img className='w-full object-cover' src='https://source.unsplash.com/7pAguituFGo' />
        
      </Carousel>

    </div>
  )
}

export default PhotoCarousel