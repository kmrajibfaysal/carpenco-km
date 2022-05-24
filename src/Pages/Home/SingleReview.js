import React from 'react';

function SingleReview({ data }) {
    const { name, review, rating } = data;
    return (
        <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="border-3 mx-auto h-full max-w-md rounded-2xl border-indigo-900 bg-white py-10 px-6  md:px-10">
                <div className="flex h-full flex-col">
                    <h3 className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                        {review}
                    </h3>
                    <p className="mb-auto text-xl font-extrabold leading-8 md:text-2xl">
                        Rating: {rating}
                    </p>
                    <h4 className="mt-10 font-extrabold md:text-xl">{name}</h4>
                    <span className="font-bold text-gray-400">CPO at Nigodo</span>
                </div>
            </div>
        </div>
    );
}

export default SingleReview;
