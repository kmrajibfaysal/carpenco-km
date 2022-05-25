import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleBlog({ blog }) {
    const { title, submitted, img } = blog;
    const navigate = useNavigate();
    return (
        <div className="max-w-xs overflow-hidden">
            <img className="w-full" src={img} alt="Mountain" />
            <div className=" py-4">
                <p className="mb-2 text-xs font-bold uppercase text-accent">{submitted}</p>
                <p className=" text-lg font-bold text-black">{title}</p>
            </div>
            <div className=" pt-4 pb-2">
                <button
                    onClick={() => navigate('/blog')}
                    className=" border-2 border-gray-700 px-7 py-3 font-josefin text-base font-bold text-black transition duration-500 ease-in-out hover:bg-gray-700 hover:text-white"
                >
                    View More
                </button>
            </div>
        </div>
    );
}

export default SingleBlog;
