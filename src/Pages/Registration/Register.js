/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSendEmailVerification,
    // eslint-disable-next-line prettier/prettier
    useUpdateProfile
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import LoginPageHeader from '../Shared/LoginPageHeader';
import useToken from '../Shared/useToken';

function Register() {
    const [seePass, setSeePass] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [createUserWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
        useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);
    // updating username
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleEmailRegister = async (data) => {
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await toast('A verification email sent!');
        await sendEmailVerification();

        const newUser = {
            name: data.name,
            email: data.email,
        };

        fetch(`https://carpenco-server.herokuapp.com/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });

        //
    };

    const [token] = useToken(userEmail);

    useEffect(() => {
        if (token && !updating) {
            if (token) {
                navigate(from, { replace: true });
            }
        }
    }, [token, from, navigate, updating]);

    if (loadingEmail || updating) {
        return <Loading />;
    }
    return (
        <div className="font-josefin">
            <LoginPageHeader text1="Create Account" />
            <div className="my-16 mx-auto max-w-xl overflow-hidden   rounded bg-gray-100 p-5 py-12 px-4 shadow-xl sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit(handleEmailRegister)}>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Name
                        </label>
                        <input
                            {...register('name', {
                                required: { value: true, message: 'This is required!' },
                            })}
                            aria-label="enter email address"
                            role="input"
                            type="text"
                            className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                        />
                        <p className="text-red-500">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: { value: true, message: 'Email is required!' },
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Please enter a valid email!',
                                },
                            })}
                            aria-label="enter email address"
                            role="input"
                            type="email"
                            className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                        />
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                    <div className="mt-6  w-full">
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input
                                {...register('password', {
                                    required: { value: true, message: 'Password is required.' },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters long',
                                    },
                                    pattern: {
                                        value: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,50})$/,
                                        message: 'Password must contains 1 letter and 1 number',
                                    },
                                })}
                                aria-label="enter Password"
                                role="input"
                                type={seePass ? 'text' : 'password'}
                                className="text-md mt-1 block w-full rounded border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                            />

                            <button
                                type="button"
                                onClick={() => setSeePass(!seePass)}
                                className="absolute right-0 mt-2 mr-3 cursor-pointer"
                            >
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                        fill="#71717A"
                                    />
                                </svg>
                            </button>
                        </div>
                        <p className="text-red-500">{errors.password?.message}</p>
                    </div>
                    <div className="mt-8">
                        <div className="mb-4 flex flex-col items-start">
                            <div>
                                <input
                                    {...register('terms', {
                                        required: {
                                            value: true,
                                            message: 'Please agree to terms and condition.',
                                        },
                                    })}
                                    id="checkbox-1"
                                    aria-describedby="checkbox-1"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-accent"
                                />
                                <label
                                    htmlFor="checkbox-1"
                                    className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    I agree to the{' '}
                                    <a href="/" className="text-primary hover:underline">
                                        terms and conditions
                                    </a>
                                </label>
                            </div>
                            <p className="text-red-500">{errors.terms?.message}</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-x-2">
                            <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                                Create
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
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
