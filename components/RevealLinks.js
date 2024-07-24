'use client'
import React from 'react'
import {motion} from 'framer-motion'

const RevealLinks = () => {
  return (
    <section className='grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black'>
        <FlipLink href ="#">Twitter</FlipLink>
        <FlipLink href ="#">LinkedIn</FlipLink>
        <FlipLink href ="#">Facebook</FlipLink>
        <FlipLink href ="#">Instagram</FlipLink>
    </section>
  )
}

const FlipLink = ({children, href}) =>{
    return(
        <motion.a 
        initial = "initial"
        whileHover = "hovered"
        href = {href} 
        className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl bg-white'>
            <motion.div
                variants = {{
                    initial: {
                        y:0
                    },
                    hovered: {y:"-100%"}
                }}
            >
                {children}
            </motion.div>
            <motion.div
                className='absolute inset-0'
                variants = {{
                    initial: {
                        y:"100%"
                    },
                    hovered: {y:"0%"}
                }}
            >
                {children}
            </motion.div>
        </motion.a>
    )
}

export default RevealLinks
