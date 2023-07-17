import React, {useEffect, useState} from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from './layout.module.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavigationBar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className={styles.container}>
                <div className="flex items-end justify-between">
                    <div className="mb-2">
                        <Link href="/">
                            <Image src="/images/dayiiday_logo.webp" alt="logo" width="90" height="90"/>
                        </Link>
                    </div>
                    <div className="hidden sm:flex">
                        <ul>
                            <Link className="px-6 py-2 hover:bg-yellow-500 hover:text-white" href="/">Home</Link>
                            <Link className="px-6 py-2 hover:bg-yellow-500 hover:text-white" href="/contact">Contact</Link>
                            <Link className="px-6 py-2 hover:bg-yellow-500 hover:text-white" href="https://donate.stripe.com/aEU4hg8Cd6roaME288">Donate</Link>
                        </ul>
                    </div>

                    {/* Mobile Menu Burger */}
                    <div onClick={handleNav} className='sm:hidden z-30'>
                        {nav ? <AiOutlineClose size={20} style={{ color: 'white'}}/> : <AiOutlineMenu size={20} style={{ color: 'black'}}/> }
                    </div>
                
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={
                nav 
                    ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-20 text-white" 
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-20 text-white"}>
                <ul>
                    <li onClick={handleNav} className="px-6 py-2 hover:text-gray-500">
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={handleNav} className="px-6 py-2 hover:text-gray-500">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="px-6 py-2 hover:text-gray-500">
                        <Link href="https://donate.stripe.com/aEU4hg8Cd6roaME288">Donate</Link>
                    </li>

                </ul>
            </div>
        
        </>
    )
}

export default NavigationBar;