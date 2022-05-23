/* eslint-disable no-alert */
import React from 'react';

function SingleMyOrder({ order, refetch }) {
    const { img, name, quantity, price } = order;

    const handleCancelOrder = (product) => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('deleted');
            fetch(`http://localhost:5000/order/${product._id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    refetch();
                });
        } else {
            console.log('cancel');
        }
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
            <th>
                <button className="btn btn-ghost btn-xs text-green-500">Pay</button>
                <button
                    onClick={() => handleCancelOrder(order)}
                    className="btn btn-ghost btn-xs text-red-500"
                >
                    Cancel
                </button>
            </th>
        </tr>
    );
}

export default SingleMyOrder;
