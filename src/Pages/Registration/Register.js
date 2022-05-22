/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPageHeader from '../Shared/LoginPageHeader';

function Register() {
    const navigate = useNavigate();
    return (
        <div className="font-josefin">
            <LoginPageHeader text1="Create Account" />
            <div className="my-16 mx-auto max-w-xl overflow-hidden   rounded bg-gray-100 p-5 py-12 px-4 shadow-xl sm:px-6 lg:px-8">
                <form className="space-y-4 transition-all duration-200">
                    <div>
                        <div className="grid gap-6">
                            <div className="col-span-12">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    placeholder="First Name"
                                    className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                                />
                            </div>
                            <div className="col-span-12">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder="Last Name"
                                    className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                                />
                            </div>
                            <div className="col-span-12">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                                />
                            </div>

                            <div className="col-span-12">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:border-primary md:text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-x-2">
                        <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                            Create
                        </button>
                    </div>
                    <div className="divider" />
                    <div className="mx-auto flex w-2/3 flex-col items-center justify-around md:flex-row">
                        <button
                            onClick={() => navigate('/login')}
                            className="cursor-pointer text-base hover:underline"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="cursor-pointer text-base hover:underline"
                        >
                            Return to store
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
