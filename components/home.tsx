/* eslint-disable react/no-unescaped-entities */
'use client';
import react from 'react';
import Image from 'next/image'
import{
     BsArrowRightShort
} from 'react-icons/bs'
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow } from 'react-icons/tb'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Poppins } from '@next/font/google'
import Kavan from '../public/ka1.png'

const advent = Poppins({
    subsets:['latin'],
    weight:"400"
})

const variants = {
    animate:{
        y:0,
        opacity:1,
        transition:{delay:0.2, duration:1}
    },
    hover:{
        x:10,
        transition:{delay:0, duration:0.1}
    },
}

const _variants = {
    hover:{
        y:-5,
        transition:{delay:0, duration:0.1}
    },
}

const variant = {
    hover:{
        y:-20,
        opacity:0.8,
        transition:{delay:0, duration:0.1}
    },
}

export default function Home() {
    return (
        <div className={advent.className}>
            <div className='lg:flex lg:flex-row-reverse md:gap-10 items-center justify-center sm:pt-24 xl:pt-36'>
        <motion.section
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.2,duration:1}}
            id="home"
            className=' px-10 rounded-xl text-left overflow-hidden pb-12 z-10'>
            <p className='text-xl text-orange-600 font-bold pb-1 font-mono'>{"Hi, my name is"}</p>
            <h1 className='text-6xl 2xl:text-7xl xl:text-7xl pb-1 text-white md:text-7xl lg:text-6xl'>Kavan Thakkar</h1>
            <h2 className='text-2xl pt-1 pb-5 md:text-3xl xl:text-4xl font-bold text-gray-300 font-mono'>{"I am a Full Stack Developer and a Designer,"}</h2>
            <p className='text-xl pt-2 pb-5 text-gray-400 md:text-md xl:text-md max-w-xl rounded-xl font-mono'>{"Full stack developer and a third year student at Birla Institute of Technology and Science, Pilani. Let's connect!"}</p>
            <Link href="https://drive.google.com/file/d/1uMAB9NJXrExu2TmQ7hwGDfO4usC06-iJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='' >
            <motion.button
            variants={variants}
            whileHover={"hover"}
            className="  border-4 border-orange-600 bg-orange-600 text-black py-1 px-5 rounded-lg text-xl font-bold mt-3 flex items-center justify-between font-mono">
            Resume 
            <BsArrowRightShort className='' />   
            </motion.button>
            </Link>
        </motion.section>
        <motion.div
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1, delay:0.2}}
        className='px-auto pb-12 flex items-center justify-center px-10'>
            <motion.div variants={variant} whileHover={"hover"}>
            <Image src={Kavan} layout='cover' quality={100} alt='Image of the creator' className=' rounded-full bg-white bg-opacity-5 border-white/5 border-2 shadow-2xl shadow-white/5'/>
            </motion.div>
        </motion.div>
        </div>
        </div>
    )
}