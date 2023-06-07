/* eslint-disable react/no-unescaped-entities */
'use client' 
import react from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { 
    SiUbereats,
    SiAirbnb,
} from "react-icons/si"

import { 
    BsArrowUpRight,
    BsJoystick,
    BsLink45Deg,
    BsSearch,
    BsClock,
    BsPerson,
} from "react-icons/bs"

import {
    CgCardSpades
} from "react-icons/cg"
import {motion as m} from'framer-motion'

import { Monoton } from '@next/font/google'

const advent = Monoton({
    subsets:['latin'],
    weight:"400"
})

export default function Portfolio () {
    return (
        <div className={advent.className}>
        <section id="projects" className="2xl:flex 2xl:pt-10 2xl:pb-32 2xl:max-h-screen overflow-hidden 2xl:justify-center 2xl:gap-10 2xl:py-32 pt-10 px-10 bg-gradient-to-b from-black via-gray-900 to-sky-900/70">
            <div className='2xl:my-auto text-white overflow-auto 2xl:overflow-y-scroll 2xl:px-10 rounded-xl scrollbar-thin 2xl:w-auto 2xl:py-10 xl:px-10'>
              <m.h1
                initial={{opacity:0, x:40}}
                animate={{opacity:1, x:0}}
                transition={{duration:1}}
                className='text-5xl 2xl:text-5xl py-1 text-white text-left 2xl:text-right decoration-red-600 decoration-4 underline-offset-8 underline'>Projects</m.h1>
              <m.h3
                initial={{opacity:0, x:40}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.5,duration:1}}
                className="text-2xl 2xl:text-4xl py-2 leading-8 text-white mt-8 text-left 2xl:text-right font-mono">I have created a few projects to enhance my skills as a front end developer, this portfolio being one of them.</m.h3>
              <m.h3
                initial={{opacity:0, x:40}}
                animate={{opacity:1, x:0}}
                transition={{delay:1,duration:1}}
                className='text-md pt-20 text-left 2xl:text-right text-gray-400 font-mono font-bold'>Click on the respective tiles to open the respective GitHub respository.</m.h3>
            </div>
            <m.div
            className=' 2xl:max-h-screen 2xl:overflow-y-scroll scrollbar-thin text-white overflow-visible py-5 xl:px-10 rounded-xl 2xl:w-auto 2xl:py-auto font-sans scrollbar-thumb-orange-600 scrollbar-track-transparent'>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/Uber-Eats_Website' target='_blank' className=''>
                            <div className='flex gap-5'>
                                <SiUbereats className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>clone</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>My first ever website. I made this for the recruiment of the Google Developer Student Club chapter of our college.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>This is a basic website using only HTML and CSS.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://ka1thakkar.github.io/Uber-Eats_Website/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/Passenger-counter' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <BsClock className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>Study Hour Counter</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>A basic vanilla javascript website that can be used to keep track total number of hours studied.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>I made this project as an introduction to Javascript.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://study-hour-counter.netlify.app/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/Blackjack' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <CgCardSpades className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>Blackjack</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>A simple Javascript based Blackjack game. Draw 2 cards, if their sum is equal to 21, you get a blackjack. If sum is greater than 21, you lose. And if the sum is less than 21, draw cards until the sum is greater than or equal to 21.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'></p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://ka1thakkar.github.io/Blackjack/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/BITS-Club-sample' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <BsLink45Deg className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>Lead Tracker</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>A chrome extension that can be used to store link to any website. It also has &{"'Save Tab'"} button which directly stores the link to the website opened in the current tab. It uses the localStorage property to store the leads even after the browser is closed.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>{"It's"} not available on the chrome extentions store. So, the attached link is basically how it&apos;d look if it was a website instead of a extension.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://ka1thakkar.github.io/Lead-Tracker/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/Airbnb-clone' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <SiAirbnb className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'> Airbnb clone</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>My first react web app. It&apos;s a very simple, visual clone of Airbnb website.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>It {"doesn't"} have any functionality as {"it's"} supposed to be my intrduction to React.js</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://airbnb-clone-ka1.netlify.app/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/Simon-Game-Workshop' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <BsJoystick className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>Simon Game</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>A memory based in which the play has to memorise the order of the randomly highlighted colored buttons.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>This game was used as an example, during the {"'Introduction to Front-End development'"} workshop I organised as the front end team lead at GDSC, BITS Pilani.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://ka1thakkar.github.io/Simon-Game-Workshop/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/BITS-Club-sample' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <BsSearch className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>BITS-Clubs</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>This was supposed to be great way for freshers to get to know about various Clubs, Departments and Associations in our college.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>The project was discontinued because of some data related issues.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <a href='https://bits-club.netlify.app/' target='_blank'><p className='text-md'>Link to the hosted website</p></a>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
                <m.div
                initial={{opacity:0, x:-40}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1.5, delay:0.5}}
                viewport={{once:true}}
                className='py-5'>
                    <div className='p-10 bg-black bg-opacity-30 rounded-xl'>
                        <a href='https://github.com/Ka1Thakkar/portfolio-2' target='_blank' className=''>
                        <div className='flex gap-5'>
                                <BsPerson className='text-5xl 2xl:text-6xl' />
                                <h1 className='text-5xl 2xl:text-6xl font-bold'>Portfolio</h1>
                            </div>
                            <p className='text-xl 2xl:text-2xl text-gray-300 pt-5'>A website for people to get to know me, showcase my skills, and connect with like minded people.</p>
                            <p className='text-md 2xl:text-lg text-gray-300 pt-5'>One of my largest solo project, till date.</p>
                        </a>
                        <div className='flex pt-10 underline'>
                                <Link href='/'><p className='text-md'>Link to the hosted website</p></Link>
                                <BsArrowUpRight className='text-sm' />        
                        </div>
                    </div>
                </m.div>
            </m.div>
        </section>
        </div>
    )
}