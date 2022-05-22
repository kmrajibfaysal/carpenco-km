/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPageHeader from '../Shared/LoginPageHeader';

function Login() {
    const navigate = useNavigate();
    return (
        <div className="font-josefin ">
            <LoginPageHeader text1="Account" />
            <div className="my-16 mx-auto max-w-xl overflow-hidden   rounded bg-gray-100 p-5 py-12 px-4 shadow-xl sm:px-6 lg:px-8">
                <form className="space-y-4 transition-all duration-200" action="#" method="POST">
                    <div className="flex justify-center">
                        <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                            Sign in with Google
                        </button>
                    </div>
                    <div className="divider">Or</div>
                    <div>
                        <div className="grid gap-6">
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

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:underline">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center space-x-2">
                        <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                            Sign in
                        </button>
                    </div>
                    <div className="divider" />
                    <div className="mx-auto flex w-2/3 flex-col items-center justify-around md:flex-row">
                        <button
                            onClick={() => navigate('/register')}
                            className="cursor-pointer text-base hover:underline"
                        >
                            Register
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

export default Login;
