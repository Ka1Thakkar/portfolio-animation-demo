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

export default function Skills() {
    return (
        <section id="skills" className="2xl:flex 2xl:gap-10 2xl:py-32 2xl:max-h-screen 2xl:justify-between py-32">
            <div className='2xl:my-auto text-white overflow-auto 2xl:overflow-y-scroll 2xl:py-0 2xl:px-10 scrollbar-thin'>
              <h1 className='text-6xl 2xl:text-4xl pb-1 text-white underline decoration-4 underline-offset-8 decoration-red-600 font-bold text-left sm:text-right font-mono'>Skills</h1>
              <p className="text-2xl 2xl:text-4xl py-2 leading-8 text-white mt-8 text-left sm:text-right font-mono">I started my journey as a front-end developer 1 year ago and since then, I have worked with many tools like:</p>
            </div>
            <div className=' 2xl:max-h-screen 2xl:overflow-y-scroll scrollbar-thin text-white overflow-visible 2xl:px-10 rounded-xl 2xl:min-w-max 2xl:py-10'>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiHtml5 className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">HTML5</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiCss3 className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">CSS3</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiJavascript className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Javascript</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiReact className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">React</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiVuedotjs className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Vue.js</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiNextdotjs className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Next.js</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiTailwindcss className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">TailwindCSS</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiC className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  {/* <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">C</h2> */}
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiCplusplus className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">C++</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiPython className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Python</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiMysql className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">MySQL</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiFigma className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Figma</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiAdobephotoshop className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Adobe Photoshop</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiAdobeillustrator className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Adobe Illustrator</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiAdobepremierepro className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Adobe Premiere Pro</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiKrita className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">Krita</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiGithub className="text-5xl 2xl:text-6xl text-center text-white mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-6xl text-center py-5 font-mono">GitHub</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiCesium className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-2xl text-center py-5 font-mono">Cesium</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiPandas className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-2xl text-center py-5 font-mono">Pandas</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className=" bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10">
                  <SiScikitlearn className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-2xl text-center py-5 font-mono">Scikit-Learn</h2>
                </div>
              </div>
              <div className='py-5'>
                <div className="bg-opacity-30 bg-black p-5 rounded-xl 2xl:px-52 2xl:py-10 ">
                  <SiNumpy className="text-5xl 2xl:text-6xl text-center mx-auto"/>
                  <h2 className=" font-extrabold text-5xl 2xl:text-2xl text-center py-5 font-mono">Numpy</h2>
                </div>
              </div>  
            </div>
          </section>
    )
}