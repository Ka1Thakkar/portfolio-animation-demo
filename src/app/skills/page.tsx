'use client'
import react from 'react';
import Image from 'next/image'
import { 
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiC,
    SiReact,
    SiVuedotjs,
    SiNextdotjs,
    SiMysql,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiFigma,
    SiCplusplus,
    SiTailwindcss,
    SiAdobepremierepro,
    SiKrita,
    SiGithub,
    SiCesium,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
   } from "react-icons/si"
   import {motion as m} from 'framer-motion'

   import { Monoton } from '@next/font/google'

const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})

export default function Skills() {
    return (
      <div className={advent.className}>
        <section id="skills" className="2xl:flex 2xl:gap-10 2xl:pb-32 2xl:max-h-screen pt-10 bg-gradient-to-b from-black via-gray-900 to-sky-900/70 px-10 2xl:pt-0">
            <div className='2xl:my-auto text-white overflow-auto 2xl:overflow-y-scroll 2xl:py-0 2xl:px-10 scrollbar-thin'>
              <m.h1
              initial={{opacity:0, x:40}}
              animate={{opacity:1, x:0}}
              transition={{duration:1}}
              className='text-6xl 2xl:text-5xl pb-1 text-white underline decoration-4 underline-offset-8 decoration-red-600 text-left 2xl:text-right xl:px-10'>Skills</m.h1>
              <m.p
                          initial={{opacity:0, x:40}}
                          animate={{opacity:1, x:0}}
                          transition={{delay:0.5,duration:1}}
              className="text-2xl 2xl:text-4xl py-2 leading-8 text-white mt-8 text-left 2xl:text-right font-mono xl:px-10">I started my journey as a front-end developer 1 year ago and since then, I have worked with many tools like:</m.p>
            </div>
            <m.div
            className=' 2xl:max-h-screen 2xl:overflow-y-scroll scrollbar-thin text-white overflow-visible xl:px-10 rounded-xl 2xl:min-w-max 2xl:py-10 scrollbar-thumb-orange-600'>
              <m.div 
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiHtml5 className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">HTML5</h2>
                </div>
              </m.div>
              <m.div 
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiCss3 className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">CSS3</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiJavascript className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Javascript</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiReact className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">React</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiVuedotjs className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Vue.js</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiNextdotjs className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Next.js</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiTailwindcss className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">TailwindCSS</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiC className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">C</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiCplusplus className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">C++</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiPython className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Python</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiMysql className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">MySQL</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiFigma className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Figma</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiAdobephotoshop className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Adobe Photoshop</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiAdobeillustrator className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Adobe Illustrator</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiAdobepremierepro className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Adobe Premiere Pro</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiKrita className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Krita</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiGithub className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">GitHub</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiCesium className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Cesium</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiPandas className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Pandas</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10">
                  <SiScikitlearn className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Scikit-Learn</h2>
                </div>
              </m.div>
              <m.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:1.5, delay:0.5}}
              viewport={{once:true}}
              className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-32 2xl:py-10 ">
                  <SiNumpy className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-sans">Numpy</h2>
                </div>
              </m.div>  
            </m.div>
          </section>
        </div>
    )
}