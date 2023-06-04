'use client'
import './globals.css'
import Nav from '../../components/nav'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

export const metadata = {
  title: 'Ka1 Portfolio',
  description: 'Created by Ka1_Thakkar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='2xl:overflow-hidden'>
      <body>
        <Nav />
        <AnimatePresence>
          <motion.div>
            {children}
          </motion.div>  
        </AnimatePresence>
      </body>
    </html>
  )
}
