/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

function Header() {
    const [user, loading] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.93)]  py-3">
            <div className="container  mx-auto">
                <div className="navbar font-josefin font-extrabold">
                    <div className="navbar-start hidden md:block">
                        <ul className="nav-link menu menu-horizontal p-0 uppercase">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <label
                            htmlFor="dashboard-sidebar"
                            className="btn btn-ghost drawer-button lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                    </div>
                    <div className="navbar-center mx-auto">
                        <Link
                            to="/"
                            className="cursor-pointer text-3xl font-bold normal-case  text-primary outline-none"
                        >
                            CARPENCO
                        </Link>
                    </div>
                    <div className="navbar-end md:hidden">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    {!user ? (
                                        <Link to="/login">Login</Link>
                                    ) : (
                                        <button
                                            type="button"
                                            className="text-sm font-semibold hover:bg-transparent hover:text-primary"
                                            onClick={logOut}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <ul className="nav-link menu menu-horizontal   cursor-pointer p-0 uppercase">
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                {!user ? (
                                    <Link to="/login">Login</Link>
                                ) : (
                                    <button
                                        type="button"
                                        className="text-sm font-semibold uppercase hover:bg-transparent hover:text-primary"
                                        onClick={logOut}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </li>
                            <li className="">
                                <button
                                    type="button"
                                    className="text-sm font-semibold uppercase hover:bg-transparent hover:text-primary"
                                >
                                    {user?.displayName}
                                </button>
                            </li>
                        </ul>
                        {/* search button */}
                        <button className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        {/* notification button */}
                        {/* <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                            <span className="badge indicator-item badge-xs badge-primary" />
                        </div>
                                </button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
