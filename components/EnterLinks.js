'use client'
import React from 'react'
import {motion} from 'framer-motion'

const RevealLinks1 = () => {
  return (
    <section className='grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black'>
        <FlipLink1 href ="#">Twitter</FlipLink1>
        <FlipLink1 href ="#">LinkedIn</FlipLink1>
        <FlipLink1 href ="#">Facebook</FlipLink1>
        <FlipLink1 href ="#">Instagram</FlipLink1>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink1 = ({children, href}) =>{
    return(
        <motion.a 
        initial = "initial"
        whileHover = "hovered"
        href = {href} 
        className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl bg-white'
        style = {{
            lineHeight:0.85
        }}
        >
            <div>
                {children.split("").map((l,i)=>{
                    return(
                        <motion.span 
                            key ={i}
                            variants = {{
                                initial: {
                                    y:0
                                },
                                hovered: {y:"-100%"}
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER*i
                            }}
                            className='inline-block'
                        >
                            {l}
                        </motion.span>
                    )
                })}
            </div>
            <div
                className='absolute inset-0'
            >
                {children.split("").map((l,i)=>{
                    return(
                        <motion.span 
                            key ={i}
                            variants = {{
                                initial: {
                                    y:"100%"
                                },
                                hovered: {y:"0%"}
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER*i
                            }}
                            className='inline-block'
                        >
                            {l}
                        </motion.span>
                    )
                })}
            </div>
        </motion.a>
    )
}

export default RevealLinks1
