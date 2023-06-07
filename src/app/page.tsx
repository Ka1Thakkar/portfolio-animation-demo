import Home from '../../components/home'
import {motion as m} from 'framer-motion'
import Image from 'next/image'
import Kavan from '../../public/ka1.png'


export default function app() {
  return (
          <div className=' px-5 md:px-20 lg:px-10 2xl:px-40 sm:py-10 xl:pb-36 min-h-screen 2xl:max-h-screen bg-gradient-to-b from-black via-gray-900 to-sky-900/70 justify-center'>
            <Home />
            {/* <About /> */}
          </div>
  )
}
