import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/SignUp">Sign Up</NavLink></li>
        

    </>

    return (
        <div className="navbar flex justify-between bg-base-100 shadow-sm">
            {/* <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div> */}
            <div className="navbar-center flex">
                <ul className="menu flex gap-8 menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default Header;