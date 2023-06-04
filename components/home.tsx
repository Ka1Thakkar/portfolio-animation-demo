/* eslint-disable react/no-unescaped-entities */
'use client';
import react from 'react';
import Image from 'next/image'
import{
     BsArrowRightShort
} from 'react-icons/bs'
import {motion} from 'framer-motion'

export default function Home() {
    return (
        <motion.section
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.2,duration:1}}
            id="home"
            className=' px-10 sm:p-10 rounded-xl text-left sm:pt-44 pt-10'>
            <p className='text-xl text-red-600 font-mono font-bold pb-2'>Hi, my name is</p>
            <h2 className='text-6xl 2xl:text-6xl xl:text-6xl pb-1 text-white font-extrabold md:text-6xl lg:text-6xl font-sans'>Kavan Thakkar</h2>
            <h3 className='text-3xl pt-1 pb-5 md:text-3xl xl:text-6xl font-bold font-sans text-gray-300'>I am a Full Stack Developer and a Designer,</h3>
            <p className='text-xl pt-2 pb-10 text-gray-400 md:text-md xl:text-md max-w-xl font-serif rounded-xl'>Third year student at Birla Institute of Technology and Science, Pilani and a front-end development enthusiast. {"Let's"} connect!</p>
            <button className=" 2xl:bg-transparent border-4 border-orange-500 bg-orange-500 text-black 2xl:border-white 2xl:hover:border-orange-500 2xl:text-white py-1 px-5 rounded-lg text-xl font-bold mt-3 font-mono hover:shadow-md 2xl:hover:shadow-gray-600 2xl:hover:bg-orange-500 2xl:hover:shadow-md 2xl:hover:text-black flex items-center justify-center">
                <a href="https://drive.google.com/file/d/1-dvGcmOb8DlGOP65GmR-2jjrbf_TUSuX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='flex justify-center items-center' >Resume 
                    <BsArrowRightShort className='' />
                </a>    
            </button>
        </motion.section>
    )
}