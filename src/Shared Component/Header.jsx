import { Link } from "react-router-dom";
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    let links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow rounded-box bg-gray-300">
                            {links}
                        </ul>
                    </div>
                </div>
                 <div className="navbar-center md:navbar-start max-w-[300px]">
                    <Link to='/'><img className="max-w-[200px]" src="/public/assets/logo.svg" alt="" /></Link>
                </div>
                <div className="navbar-end hidden md:navbar-end md:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end z-[999] font-semibold flex gap-3">
                    <BsHandbag className="text-xl"></BsHandbag>
                    <AiOutlineSearch className="text-xl"></AiOutlineSearch>
                    <Link to='/' className="px-4 py-2 rounded hover:bg-red-600 hover:text-white font-semibold border border-red-600 text-red-700">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;