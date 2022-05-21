import React from 'react';
import SingleBlog from './SingleBlog';

function HomeBlog() {
    return (
        <div className="container mx-auto my-20 font-karla">
            <h4 className="text-md text-center font-josefin text-gray-400">WOOD WORKING TOOLS</h4>
            <h4 className="text-center  text-4xl text-black">Featured Products</h4>
            <div className="mx-auto flex w-11/12 flex-col items-center justify-between space-x-3 md:flex-row">
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
            </div>
        </div>
    );
}

export default HomeBlog;
