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
                        <div className='flex flex-col items-center justify-center py-5'>
                            <input type="text" className="border border-gray-300 py-2 pl-3 mb-3 w-2/3" placeholder="Email Address"></input>
                            <button type="button" className="bg-yellow-500 text-white font-bold py-1 px-5 rounded-md">Sign Up</button>
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