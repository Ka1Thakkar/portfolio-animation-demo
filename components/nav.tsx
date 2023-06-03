import react from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='py-0 sm:py-5 sm:px-40 lg:flex md:justify-center lg:justify-between md:gap-2 bg-black sticky top-0 text-white font-mono'>
            <h1 className="text-opacity-100 md:text-opacity-100 lg:text-3xl font-mono font-bold pt-1 sm:py-0 text-center underline underline-offset-4 2xl:underline-offset-8 decoration-2 2xl:decoration-4 decoration-orange-500">Ka1 Thakkar</h1>
            <h1 className="text-transparent sm:text-opacity-100 md:text-transparent text-sm py-o.5">|</h1>
            <ul className='flex pb-1 gap-1 md:gap-2 justify-center'>
                <li>
                  <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/">Home</Link></button>
                </li>
                <li>
                  <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="/about">About</Link></button>
                </li>
                <li>
                  <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="#skills">Skills</Link></button>
                </li>
                <li>
                  <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><Link href="#projects">Projects</Link></button>
                </li>
                <li>
                  <button className="px-2 text-sm md:px-5 md:text-xl border-b-4 border-transparent hover:border-red-600"><a href="#contact">Contact</a></button>
                </li>
            </ul>
        </nav>
    )
}