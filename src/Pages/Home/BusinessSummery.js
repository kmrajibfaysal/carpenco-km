/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function BusinessSummery() {
    return (
        <div className="container my-24 mx-auto">
            <h1 className="text-center text-xl font-bold uppercase text-primary md:text-5xl">
                Millions business trust us
            </h1>
            <h1 className="mx-auto my-1 w-11/12 border-b-2 text-center text-sm uppercase text-accent md:my-4 md:w-1/3 md:text-2xl">
                We offer best in class tools customer need
            </h1>
            <div className="my-16 mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="#c18f4e"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                    </svg>
                    <h3 className="mt-6 text-5xl font-bold">72</h3>
                    <p className="text-sm font-semibold text-primary">Countries</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="#c18f4e"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                        />
                    </svg>
                    <h3 className="mt-6 text-5xl font-bold">700+</h3>
                    <p className="text-sm font-semibold text-primary">Completed Orders</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <svg
                        className="h-16 w-16"
                        fill="#c18f4e"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
                        />
                        <path d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z" />
                    </svg>
                    <h3 className="mt-6 text-5xl font-bold">300+</h3>
                    <p className="text-sm font-semibold text-primary">Happy clients</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <svg
                        className="h-16 w-16"
                        fill="#c18f4e"
                        viewBox="0 0 128 128"
                        id="Layer_1"
                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="M86.5,114.1c-0.5,2.9-3,4.9-5.9,4.9H34v8h46.6c6.8,0,12.6-4.9,13.8-11.5l6.4-36c0.7-4.1-0.4-8.3-3-11.4   c-2.7-3.2-6.6-5-10.7-5H71.2c1.2-3.7,2.8-9.1,4.1-16.2l0.6-4.2c0.9-6.6-3.7-12.6-10.2-13.5c-3.2-0.4-6.3,0.4-8.9,2.3   c-2.6,1.9-4.2,4.8-4.7,7.9l-0.6,4c-0.1,0.5-0.2,1-0.2,1.5c-0.1,0.5-0.2,1-0.3,1.5C47.9,61,36.3,72.8,21.3,76.6L16,77.9V127h8V84.1   c17.5-4.7,31.2-18.7,34.9-36c0.1-0.6,0.2-1.2,0.4-1.8c0.1-0.6,0.2-1.2,0.3-1.8l0.6-4c0.1-1.1,0.7-2,1.6-2.6c0.9-0.6,1.9-0.9,3-0.8   c2.2,0.3,3.7,2.3,3.4,4.5l-0.5,3.9c-2.1,11.6-5,18.3-5.5,19.6l-0.3,0.8l0,5.2h25.5c1.8,0,3.5,0.8,4.6,2.1c1.1,1.4,1.6,3.2,1.3,4.9   L86.5,114.1z" />
                        </g>
                    </svg>
                    <h3 className="mt-6 text-5xl font-bold">400+</h3>
                    <p className="text-xl font-semibold text-primary">Feedbacks</p>
                </div>
            </div>
            <div className="card mx-auto w-3/4 bg-base-100 shadow-lg shadow-primary">
                <div className="card-body flex-col justify-between md:flex-row">
                    <div>
                        <h2 className="card-title text-xl font-bold text-primary">
                            Have any question about us or get a products request?
                        </h2>
                        <p className="">Don't hesitate to contact us</p>
                    </div>
                    <div className="card-actions  justify-center">
                        <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                            Request For a Quote
                        </button>
                        <button className="border-2 border-gray-700 bg-gray-700 px-7 py-3 font-josefin font-bold text-white transition duration-500 ease-in-out hover:bg-transparent hover:text-black">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessSummery;
