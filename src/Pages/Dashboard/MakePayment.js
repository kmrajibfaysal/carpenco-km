/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
    'pk_test_51L3PmVElder2JsSIhM0HITO7z1PhBBMY7XwnfyMVqtXLy7gggvQ6yogyaEbbAxIjVerjXsX54RoiKHENNKkRigoJ00FgOmekBz'
);

function MakePayment() {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const {
        isLoading,
        error,
        data: product,
    } = useQuery('product', () =>
        fetch(`https://carpenco-server.herokuapp.com/order/${id}`).then((res) => res.json())
    );

    if (isLoading) return <Loading />;

    return (
        <div className="my-12 mx-auto h-[600px] max-w-md space-y-6">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl">Hi, {user.displayName}</h2>
                    <h2 className="card-title">Product name: {product?.name}</h2>
                    <p>{product.sd}</p>
                    <p>Order count: {product.quantity}</p>
                    <p className="mb-6">
                        Total price: {Math.ceil(product.price * parseInt(product.quantity, 10))}$
                    </p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
}

export default MakePayment;
