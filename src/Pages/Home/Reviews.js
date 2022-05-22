/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Reviews() {
    return (
        <section className="py-26 bg-whit relative my-16 overflow-hidden font-josefin">
            <div className="container relative mx-auto px-4">
                <h1 className="font-heading mt-3 mb-3 text-3xl font-extrabold md:text-4xl">
                    Testimonial from our valuable customers.
                </h1>

                <div className="-mx-2 -mb-8 flex flex-wrap">
                    <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="border-3 mx-auto h-full max-w-md rounded-2xl border-indigo-900 bg-white py-10 px-6  md:px-10">
                            <div className="flex h-full flex-col">
                                <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                    The best solution for anyone who wants to work a flexible
                                    schedule but still earn a full-time income.
                                </h3>
                                <h4 className="mt-10 font-extrabold md:text-xl">
                                    Macauley Herring
                                </h4>
                                <span className="font-bold text-gray-400">
                                    CEO &amp; Founder at Nigodo
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="border-3 mx-auto h-full max-w-md rounded-2xl border-indigo-900 bg-white py-10 px-6  md:px-10">
                            <div className="flex h-full flex-col">
                                <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                    I just can't get enough of Flex. I want to get a T-Shirt with
                                    Flex on it so I can show it off to everyone. I will recommend
                                    you to my colleagues.
                                </h3>
                                <h4 className="mt-10 font-extrabold md:text-xl">Ivan Mathews</h4>
                                <span className="font-bold text-gray-400">CTO at Nigodo</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="border-3 mx-auto h-full max-w-md rounded-2xl border-indigo-900 bg-white py-10 px-6  md:px-10">
                            <div className="flex h-full flex-col">
                                <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                                    You won't regret it. We've seen amazing results already. Thanks
                                    guys, keep up the good work!
                                </h3>
                                <h4 className="mt-10 font-extrabold md:text-xl">Elen Benitez</h4>
                                <span className="font-bold text-gray-400">CPO at Nigodo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
