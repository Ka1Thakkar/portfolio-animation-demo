/* eslint-disable react/no-unescaped-entities */
'use client'
import react from 'react';
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import { Monoton } from '@next/font/google'
import { Poppins } from '@next/font/google';
import BasicTabs from '../../../components/tabs';


const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})
const poppins = Poppins({
  subsets:['latin'],
  weight:"400"
})


const variants = {
  animate:{
    x:0,
    opacity:1,
    transition:{duration:1, delay:0.5}
  },
}



export default function About() {
    return (
      <AnimatePresence>
        <div className={advent.className}>
        <motion.section
        animate = {{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1}}
        id="about" className=" 2xl:pt-10 2xl:pb-32 bg-gradient-to-b from-black via-gray-900 to-sky-900/70 justify-center px-10 pt-10 min-h-screen">
          <motion.h1
          initial={{opacity:0, y:-40}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className='text-5xl 2xl:text-9xl text-white underline decoration-4 underline-offset-8 decoration-red-600 text-left pb-12 lg:px-20 xl:px-40 2xl:px-80'>About Me</motion.h1>
          <div className={poppins.className}>
            <motion.h2 
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:0.2}}
            className='text-white text-2xl lg:px-20 xl:px-40 2xl:px-80 pb-5'> Hey!! My name is Kavan, nice to meet you. Please take a look around.</motion.h2>
            <motion.div
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.4, duration:1}}
            >
              <BasicTabs />
            </motion.div>
          </div>
        </motion.section>
        </div>
        </AnimatePresence>
    )
}