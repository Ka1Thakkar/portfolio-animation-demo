import Home from '../../components/home'
import {motion as m} from 'framer-motion'


export default function app() {
  return (
          <div className=' px-5 md:px-20 lg:px-40 2xl:px-80 sm:py-10 xl:pb-36 min-h-screen 2xl:max-h-screen bg-gradient-to-b from-black via-gray-900 to-sky-900/70 justify-center'>
            <Home />
            {/* <About /> */}
          </div>
  )
}
