
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover: text-green-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover: text-green-900" smooth to="/#services">
                Solution
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover: text-green-900" to="/">
                Resources
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-white hover:bg-green-900 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl border-green-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Start now
            </HashLink>
        </>
    )
}

export default NavLinks;
