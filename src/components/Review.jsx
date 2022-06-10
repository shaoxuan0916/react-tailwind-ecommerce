import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Review = () => {
    return (
        <div id='reviews' className='w-full mx-auto py-8 md:py-20 px-4'>
            <div className='py-10 md:py-20 text-center'>
                <h3 className=''>Reviews</h3>
            </div>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
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
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                transitionDuration={2500}
            >
                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>
                
                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                <div className='flex flex-col items-center text-center p-8 mx-2 rounded-lg bg-yellow-50'>
                    <p>Goooooood! Awesome Headphone!</p>
                    <p className='italic font-thin pt-2'>- Kobe Bryant</p>
                </div>

                

                
            </Carousel>

        </div>
    )
}

export default Review