'use client'
import react from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {animate, motion} from 'framer-motion'

const aboutVariants = {
  animate:{
    opacity:1,
    x:0,
    transition:{delay:0.6, duration:1}
  },
  hovering:{
    opacity:1,
    y:-5,
    transition:{duration:0,delay:0}
  }
}

const homeVariants = {
  animate:{
    opacity:1,
    x:0,
    transition:{delay:0.8, duration:1}
  },
  hovering:{
    opacity:1,
    y:-5,
    transition:{duration:0,delay:0}
  }
}

const skillsVariants = {
  animate:{
    opacity:1,
    x:0,
    transition:{delay:0.4, duration:1}
  },
  hovering:{
    opacity:1,
    y:-5,
    transition:{duration:0,delay:0}
  }
}

const projectsVariants = {
  animate:{
    opacity:1,
    x:0,
    transition:{delay:0.2, duration:1}
  },
  hovering:{
    opacity:1,
    y:-5,
    transition:{duration:0,delay:0}
  }
}

const contactVariants = {
  animate:{
    opacity:1,
    x:0,
    transition:{delay:0, duration:1}
  },
  hovering:{
    opacity:1,
    y:-5,
    transition:{duration:0,delay:0}
  }
}

export default function Nav() {
    return (
      <motion.nav
      className='pt-5 sm:py-5 sm:px-40 bg-black sticky top-0 text-white font-mono'>
        <motion.div
          className='lg:flex md:justify-center lg:justify-end md:gap-2'>
          {/* <motion.h1
            initial={{opacity:0, x:-40}}
            animate={{opacity:1, x:0}}
            transition={{duration:1}}
            className="text-opacity-100 md:text-opacity-100 lg:text-xl xl:text-3xl font-mono font-bold pt-1 sm:py-0 text-center underline underline-offset-4 2xl:underline-offset-8 decoration-2 2xl:decoration-4 decoration-orange-500">KA1 THAKKAR</motion.h1> */}
          <ul className='flex pb-1 gap-1 md:gap-2 justify-center'>
              <motion.li
                initial={{opacity:0, x:40}}
                variants={homeVariants}
                animate={"animate"}
                whileHover={"hovering"}
                >
                <Link href="/">
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600">Home</button>
                </Link>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:40}}
                animate={"animate"}
                variants={aboutVariants}
                whileHover={"hovering"}>
                <Link href="/about">
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600">About</button>
                </Link>
              </motion.li>
              <motion.li 
                variants={skillsVariants}            
                initial={{opacity:0, x:40}}
                animate={"animate"}
                whileHover={"hovering"}>
                <Link href="/skills">
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600">Skills</button>
                </Link>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:40}}
                animate={"animate"}
                variants={projectsVariants}
                whileHover={"hovering"}>
                <Link href="/projects">
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600">Projects</button>
                </Link>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:40}}
                animate={"animate"}
                variants={contactVariants}
                whileHover={"hovering"}>
                <Link href="/contact">
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600">Contact</button>
                </Link>
              </motion.li>
          </ul>
          </motion.div>
      </motion.nav>
    )
}