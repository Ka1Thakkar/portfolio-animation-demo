import react from 'react';
import Image from 'next/image'
import { BiUpArrowCircle } from "react-icons/bi";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail,
    AiOutlineContacts
} from "react-icons/ai";

export default function Contact () {
    return (
        <section id="contact" className=" bg-indigo-950 min-h-screen font-sans">
          <div>
            <h1 className="text-5xl text-left md:text-8xl text-red-600 font-extrabold px-5 lg:px-40 pt-32 font-serif">Want me to make your dream website come true?</h1>
            <h2 className="text-white text-4xl px-5 lg:px-40 pt-5 text-left font-mono">Drop me a message on any of my socials!!</h2>
            {/* <div className="flex justify-center items-center">
              <Image src={Kavan} className="rounded-full h-72 w-72"></Image>
            </div> */}
          </div>
          {/* <div className="px-40">
            <Image src={Kavan} className="rounded-full" />
          </div> */}
          <div className="px-5 md:px-40 text-center font-serif md:flex md:items-center md:justify-between md:text-left pt-20">
          {/* <Image src= {Kavan} className="rounded-full h-56 w-56 md:h-64 md:w-64 mx-auto md:mx-0 shadow-lg shadow-black hover:shadow-2xl hover:shadow-black" /> */}
          <div className="p-10 font-sans bg-gray-500 bg-opacity-20 rounded-xl px-5 shadow-md shadow-black my-10 mx-auto">
            <AiOutlineContacts className='text-5xl mx-auto text-white' />
            <h1 className="pb-2 pt-10 text-white text-3xl font-bold text-center">Kavan Thakkar</h1>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Phone Number:</span> 9925141357</h2>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Mail:</span> kavan1357@gmail.com</h2>
            <h2 className="text-white text-lg text-center"><span className="font-bold">Residence:</span> Surat, India</h2>
            <div className="flex pt-7 text-white text-3xl gap-8 items-center justify-center">
              <a className="hover:text-white" href="https://github.com/Ka1Thakkar" target="_blank"><AiFillGithub /></a>
              <a className="hover:text-white" href="https://www.linkedin.com/in/kavan-thakkar/" target="_blank"><AiFillLinkedin /></a>
              <a className="hover:text-white" href="mailto:kavan1357@gmail.com" target="_blank"><AiOutlineMail /></a>
            </div>
          </div>
          {/* <a href="#"><BiUpArrowCircle className="text-black text-5xl md:text-7xl mx-auto cursor-pointer hover:text-white hover:bg-teal-800 hover:rounded-full"/></a> */}
          </div>
          <div className=" pb-20">
            <a href="#"><BiUpArrowCircle className="text-white text-5xl md:text-7xl mx-auto cursor-pointer rounded-full"/></a>
          </div>
        </section>
    )
}