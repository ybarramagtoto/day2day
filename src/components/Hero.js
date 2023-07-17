// @ts-nocheck
import React from 'react'
import Image from 'next/image'
import Gallery from './Gallery'
import styles from "../components/section.module.css"
import Link from "next/link"

const Hero = ({heading, message}) => {
  return (
    <>
        <div className='flex items-center justify-center w-screen h-[37.5rem] bg-center bg-cover custom-img'>
            {/* Overlay for text over the picture*/}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2] ease-in duration-300' />
            <div className='p-5 text-white z-[2] w-2/5'>
                <h1 className='text-5xl'>{heading}</h1>
                <p className='pb-5 text-xl'>{message}</p>
                <Link className='text-center px-8 py-2 border bg-white text-black rounded-md' href={"https://donate.stripe.com/aEU4hg8Cd6roaME288"}>Donate</Link>
            </div>
        </div>

        <div className={styles.section}>
            <div className='flex items-center justify-center w-screen bg-center bg-cover pt-20'>
                {/* Overlay for text over the picture*/}
                {/* <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' /> */}
                <div className='p-5 z-[2] w-4/6 text-center'>
                    <h1 className='text-7xl'>Our Mission</h1>
                    <p className='py-5 text-3xl font-light'>We are a San Diego based non-profit whose is to empower and support disadvantaged and at-risk youth athletes by providing them with assistance and education. We strive to cultivate an environment where they can develop into responsible, accountable individuals, equipped with the knowledge and skills to make healthier lifestyle choices.</p>
                </div>
            </div>
            
            <div className='border mr-40 ml-40'/>
            
            <div className='flex items-center justify-center w-screen bg-center bg-cover py-10'>
                <div className='p-5 z-[2] w-4/6 text-center'>
                    <h1 className='text-6xl mb-5'>Our Team</h1>
                    <div className='flex items-center justify-center space-x-10'>
                        <div>
                            <Image className='rounded-full overflow-hidden' src="/images/dd.jpeg" alt='david dunn' width='200' height='500' ></Image>
                            <p className='font-bold'>David Dunn</p>
                            <p>Founder</p>
                        </div>
                        <div>
                            <Image className='rounded-full overflow-hidden' src="/images/dd.jpeg" alt='david dunn' width='200' height='500' ></Image>
                            <p className='font-bold'>Brehana Accardo</p>
                            <p>Director</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border mr-40 ml-40'/>

            <div className='flex items-center justify-center w-screen bg-center bg-cover py-10'>
                <div className='p-5 z-[2] w-4/6 text-center'>
                    <h1 className='text-6xl mb-5'>In The News</h1>
                    <div className=''>
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero