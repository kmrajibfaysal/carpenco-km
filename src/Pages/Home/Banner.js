/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    return (
        <div className="banner overflow-x-hidden  bg-[url('https://i.ibb.co/C7PQxc0/banner.webp')] bg-cover bg-[center_right_-16rem] bg-no-repeat md:bg-center">
            <div className="container mx-auto">
                <div className="mx-3 flex h-[600px] max-w-[900px] flex-col flex-wrap items-start justify-center  md:h-[900px]">
                    <h2 className="text-md mb-4 font-josefin font-semibold text-white md:text-2xl lg:text-4xl">
                        Best Carpenter's Company
                    </h2>
                    <h1 className="mb-4 font-raleway text-3xl font-semibold uppercase text-primary md:text-4xl lg:text-6xl">
                        Professional and quality carpenter tools
                    </h1>

                    <p className="mb-4 font-josefin text-sm text-white md:text-xl">
                        We manufacture top class carpenter tools from fast class wood and metal. Our
                        goal is to make a good relation with our customer for long run by providing
                        best class products we have.
                    </p>

                    <button
                        onClick={() => navigate('/shop')}
                        className="scale-75 border-2 border-primary bg-primary px-7 py-3 font-josefin text-xl font-semibold uppercase text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary md:scale-90  lg:scale-100"
                    >
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
