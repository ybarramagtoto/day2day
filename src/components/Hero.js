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
            <div className='sm:p-5 text-white z-[2] w-2/5'>
                <h1 className='sm:text-5xl text-3xl '>{heading}</h1>
                <p className='pb-5 sm:text-xl text-l text-shadow'>{message}</p>
                <Link className='text-center px-5 py-2 border bg-white text-black rounded-md' href={"https://donate.stripe.com/aEU4hg8Cd6roaME288"}>Donate</Link>
            </div>
        </div>

        <div className={styles.section}>
            <div className='flex items-center justify-center w-screen bg-center bg-cover pt-20'>
                {/* Overlay for text over the picture*/}
                <div className='mt-[-1rem] w-4/6 text-center'>
                    <h1 className='pb-5 sm:text-7xl text-6xl'>Our Mission</h1>
                    <p className='pb-10 sm:text-3xl text-xl font-light'>We are a San Diego-based non-profit organization whose mission is to empower and support disadvantaged and at-risk youth athletes by providing them with assistance and education. We strive to cultivate an environment where they can develop into responsible, accountable individuals, equipped with the knowledge and skills to make healthier lifestyle choices.</p>
                </div>
            </div>
            
            <div className='flex items-center justify-center'>
                <div className='border w-2/3'/>
            </div>
            
            <div className='flex items-center justify-center w-screen bg-center bg-cover py-10'>
                <div className='pb-5 z-[2] w-4/6 text-center'>
                    <h1 className='pb-5 sm:text-7xl text-6xl mb-5'>Our Team</h1>
                    <div className='flex justify-center space-x-10'>
                        <div>
                            <Image className='rounded-full overflow-hidden' src="/images/dd.jpeg" alt='david dunn' width='200' height='200' ></Image>
                            <p className='font-bold'>David Dunn</p>
                            <p>Founder</p>
                        </div>
                        <div>
                            <Image className='rounded-full overflow-hidden' src="/images/blake_kirby.png" alt='blake kirby' width='200' height='200' ></Image>
                            <p className='font-bold'>Blake Kirby</p>
                            <p>Board Member</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <div className='border w-2/3'/>
            </div>

            <div className='flex items-center justify-center w-screen bg-center bg-cover py-10'>
                <div className='w-4/6 text-center'>
                    <h1 className='pb-5 sm:text-7xl text-6xl mb-5'>In The News</h1>
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