'use client'
import react from 'react';
import Image from 'next/image'
import { BiUpArrowCircle } from "react-icons/bi";
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandStackoverflow,
  TbBrandGmail
} from "react-icons/tb";
import Link from 'next/link';
import {motion as m} from 'framer-motion'
import { Monoton } from '@next/font/google'
import Form from '../../../components/form';

const _variants = {
hover:{
    y:-5,
    transition:{delay:0, duration:0.1}
},
}

const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})

const variants = {
  hover:{
      y:-5,
      transition:{delay:0, duration:0.1}
  }
}

export default function Contact () {
    return (
      <div className={advent.className}>
        <section id="contact" className=" min-h-screen bg-gradient-to-b from-black via-gray-900 to-sky-900/70 pt-10 px-10">
          <div className='pb-12'>
            <m.h1
                        initial={{opacity:0, y:-40}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1}}
            className="text-6xl text-left md:text-8xl text-red-600 lg:px-40 2xl:pt-10">Want me to make your dream website come true?</m.h1>
            <m.h2
                        initial={{opacity:0, y:-40}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:0.5,duration:1}}
            className="text-white text-4xl lg:px-40 pt-5 text-left font-mono">Drop me a message on any of my socials!!</m.h2>
          </div>
          <div className='lg:px-20 xl:px-40 pb-12'>
          <div className="text-center font-serif lg:flex lg:items-center lg:justify-between lg:text-left">
            <Form />
          </div>
          </div>
        </section>
      </div>
    )
}