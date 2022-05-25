/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmModal({ refetch, cancellingOrder, setCancellingOrder }) {
    // const { name } = cancellingOrder;
    const handleCancelOrder = (product) => {
        fetch(`https://carpenco-server.herokuapp.com/order/${cancellingOrder._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCancellingOrder(null);
                refetch();
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-red-500">
                        Are you sure you want to delete!
                    </h3>
                    <p className="py-4">
                        Seems price to be high?{' '}
                        <Link className="font-semibold text-blue-400" to="/contact">
                            Contact us
                        </Link>
                        . There is attractive discount available!
                    </p>
                    <div className="modal-action">
                        <label
                            type="button"
                            htmlFor="delete-confirm-modal"
                            onClick={() => handleCancelOrder()}
                            className="btn btn-error btn-xs"
                        >
                            Delete
                        </label>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
