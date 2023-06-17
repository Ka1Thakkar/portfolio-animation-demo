'use client'
import react from 'react';
import {
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandStackoverflow,
  TbBrandGmail
} from "react-icons/tb";
import Link from 'next/link';
import {motion as m} from 'framer-motion'

const _variants = {
    hover:{
        y:-5,
        transition:{delay:0, duration:0.1}
    },
}

export default function Footer(){
    return(
        <section className='bg-gradient-to-b from-sky-900/70 to-white/20 lg:flex md:justify-center lg:justify-start md:gap-10 sm:px-40 text-white'>
        <div className="flex gap-10 md:gap-10 justify-center text-3xl lg:text-4xl p-5">
            <Link className="hover:text-white" href="https://github.com/Ka1Thakkar" target="_blank"><m.button variants={_variants} whileHover={"hover"}><TbBrandGithub /></m.button></Link>
            <Link className="hover:text-white" href="https://www.linkedin.com/in/kavan-thakkar/" target="_blank"><m.button variants={_variants} whileHover={"hover"}><TbBrandLinkedin /></m.button></Link>
            <Link className="hover:text-white" href="mailto:kavan1357@gmail.com" target="_blank"><m.button variants={_variants} whileHover={"hover"}><TbBrandGmail /></m.button></Link>
            <Link className="hover:text-white" href="https://stackoverflow.com/users/21417020/kavan-thakkar" target="_blank"><m.button variants={_variants} whileHover={"hover"}><TbBrandStackoverflow /></m.button></Link>
        </div>
        </section>
    )
}