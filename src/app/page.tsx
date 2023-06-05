import Home from '../../components/home'
import {motion as m} from 'framer-motion'


export default function app() {
  return (
          <div className=' px-5 2xl:px-80 sm:py-10 1xl:pb-36 min-h-screen 2xl:max-h-screen bg-gradient-to-b from-black to-stone-900 justify-center'>
            <Home />
            {/* <About /> */}
          </div>
  )
}
