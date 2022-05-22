import React from 'react';
import test from '../../Assets/products/buttel.png';

function SingleProduct() {
    return (
        <div className="card w-96 rounded-none border-none font-josefin">
            <figure>
                <img
                    className="duration-400 transition-all ease-in-out hover:scale-110 "
                    src={test}
                    alt="Buttel"
                />
            </figure>
            <div className="card-body items-start justify-center">
                <h2 className="card-title">Buttel</h2>

                <div>
                    <p>Professional buttel made from first class metal and wood.</p>
                    <p>USD. 4.99$ per unit </p>
                    <p>Minimum order: 5</p>
                    <p>Available in stock: 32 </p>
                </div>
                <div className="flex items-start justify-start">
                    <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                        Place order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
