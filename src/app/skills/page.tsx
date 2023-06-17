'use client'
import react from 'react';
import Image from 'next/image'
import { 
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiReact,
    SiVuedotjs,
    SiNextdotjs,
    SiMysql,
    SiAdobephotoshop,
    SiFigma,
    SiTailwindcss,
    SiGithub,
    SiPostgresql,
    SiPrisma,
    SiNodedotjs,
    SiTypescript,
    SiAdobepremierepro,
    SiAdobeillustrator,
    SiKrita,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiJupyter,
    SiAnaconda,
    SiPlotly,
    SiC,
    SiCplusplus,
    SiCesium,
   } from "react-icons/si"
  import {} from "react-icons/fc"
import {motion as m} from 'framer-motion'
import { Monoton } from '@next/font/google'
import { Poppins } from '@next/font/google'

const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})

const poppins = Poppins({
  subsets:['latin'],
  weight:"400"
})

export default function Skills() {
    return (
      <div className={advent.className}>
        <section id="skills" className=" min-h-screen 2xl:pb-32 pt-10 bg-gradient-to-b from-black via-gray-900 to-sky-900/70 px-10 2xl:pt-10">
            <div className='2xl:my-auto text-white overflow-auto 2xl:overflow-y-scroll 2xl:py-0 2xl:px-10 scrollbar-thin'>
              <m.h1
              initial={{opacity:0, x:40}}
              animate={{opacity:1, x:0}}
              transition={{duration:1}}
              className='text-5xl 2xl:text-9xl pb-1 text-white underline decoration-4 underline-offset-8 decoration-red-600 text-left xl:px-10'>Skills</m.h1>
              <div className={poppins.className}>
              <m.p
                          initial={{opacity:0, x:40}}
                          animate={{opacity:1, x:0}}
                          transition={{delay:0.5,duration:1}}
              className="text-2xl 2xl:text-4xl py-2 leading-8 text-white mt-8 text-left xl:px-10">I started my journey as a front-end developer 1 year ago and since then, I have worked with many tools like:</m.p>
            </div>
            </div>
            <div className={poppins.className}>
            <m.div
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:0.2}}
            className=' scrollbar-thin text-white overflow-visible xl:px-10 rounded-xl 2xl:min-w-max 2xl:py-10 text-4xl sm:text-6xl xl:text-8xl'>
              <h1 className='text-xl text-center pb-5 pt-12 text-orange-600 sm:text-3xl lg:text-5xl underline underline-offset-8 font-bold'>Front-End Development</h1>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiHtml5 />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiCss3 />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiJavascript />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiReact />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiNextdotjs />
                </div>
              </div>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiVuedotjs />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiTailwindcss />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiTypescript />
                </div>
              </div>
              <h1 className='text-xl text-center pb-5 pt-12 text-orange-600 sm:text-3xl lg:text-5xl underline underline-offset-8 font-bold'>Back-End Development</h1>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiNodedotjs />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiPrisma />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiPostgresql />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiMysql />
                </div>
              </div>
              <h1 className='text-xl text-center pb-5 pt-12 text-orange-600 sm:text-3xl lg:text-5xl underline underline-offset-8 font-bold'>Design</h1>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiFigma />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiAdobephotoshop />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiAdobepremierepro />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiAdobeillustrator />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiKrita />
                </div>
              </div>
              <h1 className='text-xl text-center pb-5 pt-12 text-orange-600 sm:text-3xl lg:text-5xl underline underline-offset-8 font-bold'>Data Science</h1>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiNumpy />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiPandas />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiScikitlearn />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiJupyter />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiPlotly />
                </div>
              </div>
              <h1 className='text-xl text-center pb-5 pt-12 text-orange-600 sm:text-3xl lg:text-5xl underline underline-offset-8 font-bold'>Other</h1>
              <div className='flex gap-7 sm:gap-16 md:gap-10 justify-center pb-7 md:pb-12'>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiGithub />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiPython />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiC />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiCplusplus />
                </div>
                <div className='md:bg-white md:bg-opacity-20 md:p-7 xl:p-10 2xl:p-20 rounded-xl' >
                  <SiCesium />
                </div>
              </div>
            </m.div>
            </div>
          </section>
        </div>
    )
}