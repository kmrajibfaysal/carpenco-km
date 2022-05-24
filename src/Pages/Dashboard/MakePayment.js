/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
    'pk_test_51JUgRbSAaooknzkRSLm2KdH4l7MWVpOMbCyKQnX8NU9vG7zWqt5ss5weYFS2C7Q9OAYcMGXsePYoZS568bojJTOw00rpnuXKMs'
);

function MakePayment() {
    const { id } = useParams();
    const {
        isLoading,
        error,
        data: products,
    } = useQuery('products', () =>
        fetch(`http://localhost:5000/order/${id}`).then((res) => res.json())
    );

    if (isLoading) return <Loading />;

    return (
        <div className="my-12 mx-auto h-[600px] max-w-md">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}

export default MakePayment;
