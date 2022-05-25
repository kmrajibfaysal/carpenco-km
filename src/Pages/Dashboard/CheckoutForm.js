/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function CheckoutForm({ product }) {
    const stripe = useStripe();
    const [cardError, setCardError] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const elements = useElements();

    const { _id, price, user, quantity } = product;

    useEffect(() => {
        fetch(`https://carpenco-server.herokuapp.com/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price, quantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [product]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error ? error.message : null);
        setSuccess('');
        setProcessing(true);

        // Confirm card payment
        const { paymentIntent, error: IntentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        email: user,
                    },
                },
            }
        );

        if (IntentError) {
            setCardError(IntentError.message);
            setProcessing(false);
        } else {
            setCardError(null);
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed!');
            toast.success('Congrats! Your payment is completed!');

            // store payment on database
            const payment = {
                product: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`https://carpenco-server.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    type="submit"
                    className="my-6 rounded-lg bg-green-500 px-5 py-3"
                    disabled={!stripe || !clientSecret || success}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-base text-red-600">{cardError}</p>}
            {success && (
                <div className="text-base text-green-600">
                    <p>{success}</p>
                    <p>
                        Your transaction id: <span className="text-gray-800">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    );
}

export default CheckoutForm;
