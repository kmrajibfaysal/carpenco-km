import React from 'react';
import SingleProduct from './SingleProduct';

function Products() {
    return (
        <div className="container mx-auto my-20 font-karla">
            <h4 className="text-md text-center font-josefin text-gray-400">WOOD WORKING TOOLS</h4>
            <h4 className="text-center  text-4xl text-black">Featured Products</h4>
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </div>
        </div>
    );
}

export default Products;
