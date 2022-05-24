/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div
            className="
    flex
    h-screen
    w-screen
    items-center
    justify-center
    
  "
        >
            <div className="rounded-md bg-white px-40 py-20 shadow-xl">
                <div className="flex flex-col items-center">
                    <div className="max-w-md">
                        {' '}
                        <img src="https://i.ibb.co/D97VnkP/404.jpg" alt="" />
                    </div>

                    <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
                        Page not found
                    </h6>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        The page you're looking for doesn't exist.
                    </p>

                    <Link
                        to="/"
                        className="border-2 border-primary bg-primary px-7 py-4 text-sm font-semibold text-white transition duration-500 ease-in-out hover:border-primary hover:bg-transparent hover:text-primary "
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
