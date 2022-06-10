import React, { useState } from 'react'

import { Link, animateScroll as scroll } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { RiShoppingCartLine } from 'react-icons/ri'
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"


const Navbar = ({ totalItems }) => {

    const [nav, setNav] = useState(false)

    const location = useLocation()

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className='absolute z-10 w-full shadow-xl bg-gray-800/70'>
            <div className='max-w-[1240px] mx-auto py-4 px-4 h-[70px] flex justify-between'>

                <RouterLink to='/'>
                    <h1 className='cursor-pointer'>Earss</h1>
                </RouterLink>

                <div className='flex items-center'>

                    {location.pathname === '/' && (
                        <ul className='hidden md:flex gap-12 pr-20 text-[#EEEEEE]'>
                            <li className='text-lg hover:text-teal-300'><Link activeClass="active" to="home" smooth={true} offset={-20} duration={1000} >Home</Link></li>
                            <li className='text-lg hover:text-teal-300'><Link activeClass="active" to="products" smooth={true} offset={-20} duration={1000} >Products</Link></li>
                            <li className='text-lg hover:text-teal-300'><Link activeClass="active" to="services" smooth={true} offset={-20} duration={1000} >Services</Link></li>
                            <li className='text-lg hover:text-teal-300'><Link activeClass="active" to="reviews" smooth={true} offset={-20} duration={1000} >Reviews</Link></li>
                            <li className='text-lg hover:text-teal-300'><Link activeClass="active" to="contact" smooth={true} offset={-20} duration={1000} >Contact</Link></li>
                        </ul>
                    )}


                    <div className='relative cursor-pointer '>
                        <RouterLink to='/cart'>
                            <div className='absolute top-[-70%] right-[-70%]'>
                                <p className='px-[0.4rem] rounded-full bg-red-500 text-white text-sm'>
                                    {totalItems}
                                </p>
                            </div>
                            <RiShoppingCartLine size={20} className='ml-auto text-[#EEEEEE]' />
                        </RouterLink>
                    </div>

                    {/* Hamburger Menu */}

                    <div onClick={handleNav} className='md:hidden cursor-pointer z-10 mx-4 text-[#EEEEEE]'>
                        {nav ? <AiOutlineClose size={20} /> : <HiMenuAlt4 size={20} />}
                    </div>

                    {/* Mobile menu dropdown */}

                    <div onClick={handleNav} className={nav ? 'absolute left-0 top-0  py-12 w-full bg-gray-700' : 'hidden'}>
                        
                        <ul className='text-white flex flex-col gap-2'>
                            <li className='pl-8 py-8 border-b-2 border-slate-50/30'><Link onClick={handleNav} activeClass="active" to="home" smooth={true} duration={1000} >Home</Link></li>
                            <li className='pl-8 py-8 border-b-2 border-slate-50/30'><Link onClick={handleNav} activeClass="active" to="products" smooth={true} duration={1000} >Products</Link></li>
                            <li className='pl-8 py-8 border-b-2 border-slate-50/30'><Link onClick={handleNav} activeClass="active" to="services" smooth={true} duration={1000} >Services</Link></li>
                            <li className='pl-8 py-8 border-b-2 border-slate-50/30'><Link onClick={handleNav} activeClass="active" to="reviews" smooth={true} duration={1000} >Reviews</Link></li>
                            <li className='pl-8 py-8 border-b-2 border-slate-50/30'><Link onClick={handleNav} activeClass="active" to="contact" smooth={true} duration={1000} >Contact</Link></li>

                            <div className='flex justify-around py-8'>
                                <FaFacebook className='icon text-xl hover:text-teal-300 cursor-pointer' />
                                <FaInstagram className='icon text-xl hover:text-teal-300 cursor-pointer' />
                                <FaPinterest className='icon text-xl hover:text-teal-300 cursor-pointer' />
                                <FaTwitter className='icon text-xl hover:text-teal-300 cursor-pointer' />
                                <FaYoutube className='icon text-xl hover:text-teal-300 cursor-pointer' />
                            </div>
                        </ul>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar