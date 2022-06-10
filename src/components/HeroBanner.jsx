import React from 'react'

import HeroVideo from '../asset/banner3.mp4'

const HeroBanner = () => {
    return (
        <div id='home' className='w-full h-screen relative'>
            <video
                className='w-full h-full object-cover'
                src={HeroVideo}
                autoPlay
                loop
                muted
            />

            <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>

            <div className='absolute w-full h-full top-0 left-0 pl-8 md:pl-[10rem] xl:pl-[16rem] flex flex-col justify-center gap-4'>
                <h5>Beats solo</h5>
                <h4 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#EEEEEE]'>Wireless</h4>
                <h2>HEADPHONES</h2>

            </div>



        </div>
    )
}

export default HeroBanner