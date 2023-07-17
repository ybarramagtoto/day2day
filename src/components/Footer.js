import styles from "../components/layout.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="border-b-4 border-double pt-6"></div>
            <div className={styles.container}>
                <div className="items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl">Stay Connected</h1>
                        <p className='font-thin'>Sign up for our newsletter to receive updates on upcoming Day II Day events and activities.</p>
                        <div className='flex justify-center py-5'>
                            <input type="text" className="border border-gray-300 py-3 pl-3 w-1/3 mr-5" placeholder="Email Address"></input>
                            <button type="button" className="bg-yellow-500 text-white font-bold px-5 rounded-full">Sign Up</button>
                        </div>
                    </div>

                </div>

                <div className="border-b py-3 my-3"></div>
                <div className="font-thin text-sm pb-3">
                    {/* <p>469-605-8151</p> */}
                    <p>Tax ID: 46-4797384</p>
                    <p>&copy; {new Date().getFullYear()} Day II Day Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;