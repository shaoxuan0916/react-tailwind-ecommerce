import React from 'react'

import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { Ri24HoursLine } from 'react-icons/ri'

const Services = () => {
    return (
        <div className=''>
            <div id='services' className='max-w-[1240px] mx-auto py-12 px-4 md:px-8'>
                <div className='py-10 text-center'>
                    <h3 className='pl-4 py-8'>Our Services</h3>
                    <p className='text-slate-500 max-w-[800px] mx-auto text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat condimentum nulla, at iaculis lorem condimentum sit amet. Aliquam lacinia auctor arcu id pulvinar.</p>
                </div>

                <div className='grid md:grid-cols-3 justify-center py-12 gap-20'>
                    <div className='flex flex-col items-center gap-4 text-gray-800 hover:text-teal-600/70'>
                        <TbTruckDelivery className='text-7xl ' />
                        <p className='text-xl'>7 Days Free Return</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 text-gray-800 hover:text-teal-600/70'>
                        <MdOutlineAirplanemodeActive className='text-7xl ' />
                        <p className='text-xl'>Worldwide Delivery</p>
                    </div>
                    <div className='flex flex-col items-center gap-4 text-gray-800 hover:text-teal-600/70'>
                        <Ri24HoursLine className='text-7xl' />
                        <p className='text-xl'>24 Hours Customer Service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services