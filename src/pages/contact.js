import React from 'react';
import Layout from '../components/layout';
import styles from "../components/section.module.css"

const contact = () => {
  return (
    <Layout>
        <div className={styles.section}>
            <div className={styles.container}>
                <h1 className='text-5xl pt-16 pb-3'>Contact</h1>
                <div className='border mb-6 '></div>
                
                <div className='text-2xl pb-2'>
                    <p className='font-bold'>DAY II DAY</p>
                    <p>PO BOX 901</p>
                    <p>Bonita, CA 91908</p>
                </div>
                
                {/* tax id */}
                <div className='text-xl py-2'>
                    <h2>Tax ID Number</h2>
                    <p>46-4797384</p>
                </div>

                {/* telephone */}
                <div className='text-xl py-2'>
                    <h2>Telephone</h2>
                    <p>469.605.8151</p>
                </div>

                {/* email */}
                <div className='text-xl py-2'>
                    <h2>Email</h2>
                    <p>brehana.accardo@bandonllc.com</p>
                </div>

                {/* email */}
                <p></p>
            </div>

        </div>
    </Layout>
  )
}

export default contact