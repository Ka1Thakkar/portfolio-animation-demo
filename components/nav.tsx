'use client'
import react from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {motion} from 'framer-motion'

export default function Nav() {
    return (
      <motion.nav
      className='py-0 sm:py-5 sm:px-40 bg-black sticky top-0 text-white font-mono'>
        <motion.div
          className='lg:flex md:justify-center lg:justify-between md:gap-2'>
          <motion.h1
            initial={{opacity:0, x:-20}}
            animate={{opacity:1, x:0}}
            transition={{duration:1}}
            className="text-opacity-100 md:text-opacity-100 lg:text-2xl xl:text-3xl font-mono font-bold pt-1 sm:py-0 text-center underline underline-offset-4 2xl:underline-offset-8 decoration-2 2xl:decoration-4 decoration-orange-500">Ka1 Thakkar</motion.h1>
          <ul className='flex pb-1 gap-1 md:gap-2 justify-center'>
              <motion.li
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.8,duration:1}}>
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/">Home</Link></button>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.6,duration:1}}>
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/about">About</Link></button>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.4,duration:1}}>
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/skills">Skills</Link></button>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.2,duration:1}}>
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/projects">Projects</Link></button>
              </motion.li>
              <motion.li             
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}>
                <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/contact">Contact</Link></button>
              </motion.li>
          </ul>
          </motion.div>
      </motion.nav>
    )
}