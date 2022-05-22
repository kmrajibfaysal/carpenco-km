/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import test from '../../Assets/test.png';

function BusinessSummery() {
    return (
        <div className="container my-24 mx-auto">
            <h1 className="text-center text-xl font-bold uppercase text-primary md:text-5xl">
                Millions business trust us
            </h1>
            <h1 className="mx-auto my-1 w-11/12 border-b-2 text-center text-sm uppercase text-accent md:my-4 md:w-1/3 md:text-2xl">
                We offer best in class tools customer need
            </h1>
            <div className="my-16 flex items-center justify-center">
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <img src={test} alt="" />
                    <h3 className="text-5xl font-bold">72</h3>
                    <p className="text-sm font-semibold text-primary">Countries</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <img src={test} alt="" />
                    <h3 className="text-5xl font-bold">72</h3>
                    <p className="text-sm font-semibold text-primary">Countries</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <img src={test} alt="" />
                    <h3 className="text-5xl font-bold">72</h3>
                    <p className="text-sm font-semibold text-primary">Countries</p>
                </div>
                <div className="flex w-1/4 flex-col items-center justify-center">
                    <img src={test} alt="" />
                    <h3 className="text-5xl font-bold">72</h3>
                    <p className="text-sm font-semibold text-primary">Countries</p>
                </div>
            </div>
            <div className="card mx-auto w-3/4 bg-base-100 shadow-lg shadow-primary">
                <div className="card-body flex-row justify-between">
                    <div>
                        <h2 className="card-title text-xl font-bold text-primary">
                            Have any question about us or get a products request?
                        </h2>
                        <p className="">Don't hesitate to contact us</p>
                    </div>
                    <div className="card-actions justify-end">
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
