import React from 'react';
import Layout from '../components/layout';
import styles from "../components/section.module.css"

const contact = () => {
  return (
    <Layout>
        <div className={styles.section}>
            <div className={styles.container}>
                <h1 className='text-5xl pt-5 pb-3'>Ways to Donate</h1>
                <div className='border mb-6 '></div>
                <h2 className='text-3xl pt-5 pb-3'>Making a donation is easy!</h2>
                
                
                <ol className="text-l list-decimal pl-5 space-y-4">
                    <li className="pl-5">
                        <strong>Online Donation:</strong> We accept donations via <a href={"https://donate.stripe.com/aEU4hg8Cd6roaME288"} className="text-blue-500 hover:underline">Stripe</a>. There you can securely make a one-time or recurring donation using your credit or debit card. Both are encrypted to ensure the safety of your financial information and will automatically distribute receipts for tax purposes to the email provided.
                    </li>
                    <li className="pl-5">
                        <strong>Check Donation:</strong> If you prefer to donate by check, please make your check payable to "Day II Day Foundation Inc" and write "Donation" in the memo line. Mail your check to:
                        <br />
                        <br />
                        Day II Day Foundation Inc
                        <br />
                        PO BOX 901
                        <br />
                        Bonita, CA 91908
                    </li>
                    <li className="pl-5">
                        <strong>Bank Transfer:</strong> For bank transfers, wire, or DAF donations please contact our finance team at <a href="mailto:info@dayiiday.org" className="text-blue-500 hover:underline">info@dayiiday.org</a> for detailed instructions. They will provide you with all the necessary information to facilitate the transfer.
                    </li>
                </ol>
                
                <p className="text-l pt-5">
                As a token of our appreciation, all donors will receive a personalized thank-you letter acknowledging their generosity. Additionally, your donation is tax-deductible to the extent allowed by law, and we will provide the necessary documentation for your records.
                </p>
 
                <p className="text-l pt-5">
                By donating to Day II Day Foundation, you are directly investing in the future of our community and helping us create lasting change for underserved youth in San Diego. Together, we can provide them with the tools they need to break the cycle of poverty and achieve their dreams.
                </p>
 
                <p className="text-l pt-5">
                If you have any questions or require further information, please do not hesitate to reach out to us at <a href="mailto:info@dayiiday.org" className="text-blue-500 hover:underline">info@dayiiday.org</a>.
                </p>
 
                <p className="text-l pt-5">
                Thank you for considering our cause and for being a vital part of our mission. Your support truly makes a difference.
                </p>
            </div>

        </div>
    </Layout>
  )
}

export default contact