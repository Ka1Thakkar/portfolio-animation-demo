import React from 'react';
import { Monoton, Poppins } from '@next/font/google';
import { useForm, ValidationError } from '@formspree/react';
import Thank from './thank_you';
import {motion as m} from 'framer-motion'
import Link from 'next/link';
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandStackoverflow } from 'react-icons/tb'

const poppins = Poppins({
    subsets:["latin"],
    weight:['400']
})

const _variants = {
  hover:{
      y:-5,
      transition:{delay:0, duration:0.1}
  },
}

const monoton = Monoton({
  subsets:["latin"],
  weight:["400"]
})
function ContactForm() {
  const [state, handleSubmit] = useForm("myyaqagk");
  if (state.succeeded) {
      return (<Thank />);
  }
  return (
    <m.div
    initial={{opacity:0, y:-40}}
    animate={{opacity:1, y:0}}
    transition={{duration:1, delay:0.4}}
    className='mx-auto'>
    <section>
      <form onSubmit={handleSubmit} className='bg-black bg-opacity-30 p-10 rounded-xl'>
        <div className={monoton.className}>
        <div className='pb-12 text-center'>
          <label className='text-4xl text-white underline-offset-8 underline decoration-red-600'>CONTACT ME</label>
        </div>
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="name" className='text-white text-3xl'>Full Name</label>
        </div> */}
        <div className={poppins.className}>
        <div className='pb-5'>
          <input type='text' name='Full Name' placeholder='Full Name' className='w-52 sm:w-96 h-10 rounded-lg text-center outline-none font-bold text-gray-500' />
        </div>
        {/* <div className='text-white pb-2 text-3xl'>
            <label htmlFor="email" className=''>Email Address</label>
        </div> */}
        <div className='pb-5'>
            <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email ID'
            className='w-52 h-10 sm:w-96 rounded-lg text-center outline-none font-bold text-gray-500'
            />
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="subject" className='text-white text-3xl'>Subject</label>
        </div> */}
        <div className='pb-5'>
          <input type='text' name='Subject' placeholder='Subject' className='w-52 sm:w-96 h-10 rounded-lg text-center outline-none font-bold text-gray-500' />
        </div>
        <div>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div className='pb-5'>
            <textarea
            id="message"
            name="message"
            className='rounded-lg h-20 w-52 sm:w-96 text-center outline-none font-bold text-gray-500'
            placeholder='Write a message here...'
            />
        </div>
        <div>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <m.div
        initial={{y:0}}
        whileHover={{y:-5}}
        transition={{delay:0, duration:0.1}}
        className='flex justify-center font-bold'>
            <button type="submit" disabled={state.submitting} className='bg-orange-600 rounded-xl px-5 py-2 border-orange-600 border-2 outline-none'>Submit</button>
        </m.div>
        </div>
    </form>
    </section>
    </m.div>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;