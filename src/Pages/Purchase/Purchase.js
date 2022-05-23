/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import LoginPageHeader from '../Shared/LoginPageHeader';

function Purchase() {
    const [qError, setQError] = useState(true);
    const { productId } = useParams();
    const [user, loading] = useAuthState(auth);

    const { isLoading, data: product } = useQuery('product', () =>
        fetch(`http://localhost:5000/products/${productId}`).then((res) => res.json())
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleOrder = (data) => console.log(data);

    if (isLoading || loading) return <Loading />;
    return (
        <div className="font-josefin">
            <LoginPageHeader text1={`Product/${product.name}`} />
            <form
                onSubmit={handleSubmit(handleOrder)}
                className="card my-24 mx-auto max-w-7xl bg-base-100 shadow-xl lg:card-side"
            >
                <figure className="w-full md:w-1/2">
                    <img src={product.img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-karla text-3xl">{product.name}</h2>
                    <div className="space-y-6">
                        <p className="text-lg">
                            Price:{'      '}
                            <span className="text-2xl font-semibold">{product.price}</span>$ per
                            unit
                        </p>
                        <p className="text-lg">Material: {product.material}</p>
                        <p className="text-lg">Vendor: Carpenco</p>
                        <p className="text-lg">Type: Tools</p>
                        <p className="text-lg">
                            Availability: {product.stock}{' '}
                            <span className="text-green-600">In Stock!</span>
                        </p>
                        <div className="text-lg">
                            Quantity:{' '}
                            <input
                                {...register('quantity', {
                                    required: { value: true, message: 'This is required!' },
                                })}
                                className="text-md ml-2 mt-1 inline-block w-1/2 rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                                type="number"
                                name="quantity"
                                id="quantity"
                                defaultValue={product?.minOrder}
                            />
                            {qError && (
                                <p className="mt-3 text-red-500">
                                    {` Valid quantity: ${product?.minOrder} - ${product?.stock}`}
                                </p>
                            )}
                        </div>
                        <p className="text-red-500">{errors.name?.message}</p>
                        <p className="text-lg font-semibold">Name: {user.displayName}</p>
                        <p className="text-lg font-semibold">Email: {user.email}</p>
                        <p>
                            <span>Your Address: </span>
                            <input
                                aria-label="address"
                                type="text"
                                name="name"
                                placeholder="ex: New York, NY 10012, US"
                                className="text-md ml-2 mt-1 inline-block w-1/2 rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                            />
                        </p>
                        <button
                            type="submit"
                            className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary "
                        >
                            Place order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Purchase;
