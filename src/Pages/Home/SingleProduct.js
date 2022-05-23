import React from 'react';

function SingleProduct({ product }) {
    const { name, sd, price, minOrder, stock, img } = product;
    return (
        <div className="card w-96 rounded-none border-none font-josefin">
            <figure>
                <img
                    className="duration-400 transition-all ease-in-out hover:scale-110 "
                    src={img}
                    alt="Buttel"
                />
            </figure>
            <div className="card-body items-start justify-center">
                <h2 className="card-title">{name}</h2>

                <div>
                    <p>{sd}</p>
                    <p>USD. {price}$ per unit </p>
                    <p>Minimum order: {minOrder}</p>
                    <p>Available in stock: {stock} </p>
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
