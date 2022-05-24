/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-alert */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleMyOrder({ order, setCancellingOrder }) {
    const { _id, img, name, quantity, price } = order;
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate(`/payment/${_id}`);
    };

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th className="">
                {!order.paid ? (
                    <label
                        onClick={() => handlePayment(order)}
                        className="btn btn-ghost btn-xs text-green-500"
                    >
                        Pay
                    </label>
                ) : (
                    <span className="text-md font-bold text-green-500">Paid</span>
                )}

                <label
                    onClick={() => setCancellingOrder(order)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-ghost btn-xs"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-600 hover:scale-110 hover:text-red-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </th>
        </tr>
    );
}

export default SingleMyOrder;
