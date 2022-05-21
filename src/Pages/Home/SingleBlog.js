import React from 'react';
import blog1 from '../../Assets/Blogs/blog-1.png';

function SingleBlog() {
    return (
        <div className="max-w-xs overflow-hidden">
            <img className="w-full" src={blog1} alt="Mountain" />
            <div className=" py-4">
                <p className="mb-2 text-xs font-bold uppercase text-accent">
                    by Ram M December 27, 2021
                </p>
                <p className=" text-lg font-bold text-black">
                    A luxury custom home builder new home remodeling
                </p>
            </div>
            <div className=" pt-4 pb-2">
                <button className=" border-2 border-gray-700 px-7 py-3 font-josefin text-base font-bold text-black transition duration-500 ease-in-out hover:bg-gray-700 hover:text-white">
                    View More
                </button>
            </div>
        </div>
    );
}

export default SingleBlog;
