import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import SingleProduct from './SingleProduct';

function NewlyArrivedProducts() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://carpenco-server.herokuapp.com/newProducts')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .then(() => setLoading(false));
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="container mx-auto my-20 font-karla">
            <h4 className="text-md text-center font-josefin text-gray-400">WOOD WORKING TOOLS</h4>
            <h4 className="text-center  text-4xl text-black">Newly Arrived</h4>
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {products.length > 0 ? (
                    products.map((product) => <SingleProduct key={product._id} product={product} />)
                ) : (
                    <p className="mx-auto text-center text-3xl font-bold text-primary">
                        Stay tuned!!
                    </p>
                )}
            </div>
        </div>
    );
}

export default NewlyArrivedProducts;
