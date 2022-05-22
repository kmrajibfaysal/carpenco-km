/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Banner() {
    return (
        <div className="banner overflow-x-hidden  bg-[url('https://i.ibb.co/C7PQxc0/banner.webp')] bg-cover bg-[center_right_-16rem] bg-no-repeat md:bg-center">
            <div className="container mx-auto ml-12 flex h-[600px] max-w-[900px] flex-col flex-wrap items-start justify-center md:ml-20 md:h-[900px]">
                <h2 className="text-md mb-4 font-josefin font-semibold text-white md:text-2xl lg:text-4xl">
                    Best Carpenter's Company
                </h2>
                <h1 className="mb-4 font-raleway text-3xl font-semibold uppercase text-primary md:text-4xl lg:text-6xl">
                    Professional and quality carpenter tools
                </h1>

                <p className="mb-4 font-josefin text-sm text-white md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aspernatur
                    possimus quidem ea consequatur facere nam numquam, aperiam esse tenetur
                    voluptatibus voluptatem. Consequatur, esse reprehenderit reiciendis quisquam
                    rerum et ut.
                </p>

                <button className="scale-75 border-2 border-primary bg-primary px-7 py-3 font-josefin text-xl font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary md:scale-90  lg:scale-100">
                    READ MORE
                </button>
            </div>
        </div>
    );
}

export default Banner;
