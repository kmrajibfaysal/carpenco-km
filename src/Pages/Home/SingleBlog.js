import React from 'react';
import blog1 from '../../Assets/Blogs/blog-1.png';

function SingleBlog() {
    return (
        <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img className="w-full" src={blog1} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">Mountain</div>
                <p className="text-base text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #photography
                </span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #travel
                </span>
                <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    #winter
                </span>
            </div>
        </div>
    );
}

export default SingleBlog;
