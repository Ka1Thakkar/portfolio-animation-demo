'use client'
import react from 'react';
import Image from 'next/image'
import { BiUpArrowCircle } from "react-icons/bi";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail,
    AiOutlineContacts
} from "react-icons/ai";
import Link from 'next/link';
import {motion as m} from 'framer-motion'
import { Monoton } from '@next/font/google'

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
          <div>
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
          <div className="md:px-40 text-center font-serif md:flex md:items-center md:justify-between md:text-left pt-10 pb-12 2xl:pb-12">
          {/* <Image src= {Kavan} className="rounded-full h-56 w-56 md:h-64 md:w-64 mx-auto md:mx-0 shadow-lg shadow-black hover:shadow-2xl hover:shadow-black" /> */}
          <m.div
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.5,duration:1}}
          className="p-10 font-sans bg-black/50 rounded-xl px-5 mx-auto mt-10 border-black/60 border-4">
            <AiOutlineContacts className='text-5xl mx-auto text-white' />
            <h1 className="pb-2 pt-10 text-white text-3xl font-bold text-center">Kavan Thakkar</h1>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Phone Number:</span> 9925141357</h2>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Mail:</span> kavan1357@gmail.com</h2>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Residence:</span> Surat, India</h2>
            <div className="flex pt-7 text-white text-4xl gap-8 items-center justify-center">
              <Link className="hover:text-white" href="https://github.com/Ka1Thakkar" target="_blank"><m.button variants={variants} whileHover={"hover"}><AiFillGithub /></m.button></Link>
              <Link className="hover:text-white" href="https://www.linkedin.com/in/kavan-thakkar/" target="_blank"><m.button variants={variants} whileHover={"hover"}><AiFillLinkedin /></m.button></Link>
              <Link className="hover:text-white" href="mailto:kavan1357@gmail.com" target="_blank"><m.button variants={variants} whileHover={"hover"}><AiOutlineMail /></m.button></Link>
            </div>
          </m.div>
          {/* <a href="#"><BiUpArrowCircle className="text-black text-5xl md:text-7xl mx-auto cursor-pointer hover:text-white hover:bg-teal-800 hover:rounded-full"/></a> */}
          </div>
        </section>
      </div>
    )
}