/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { toast } from 'react-toastify';

function ConfirmMakeAdminModal({ newAdmin, refetch }) {
    const handleMakeAdmin = () => {
        const newUser = {
            name: newAdmin.name,
            email: newAdmin.email,
            role: 'admin',
        };

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success('Admin making successful!');
                refetch();
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg font-bold text-red-500">Are you sure?</h3>

                    <div className="modal-action">
                        <label
                            type="button"
                            htmlFor="delete-confirm-modal"
                            onClick={() => handleMakeAdmin()}
                            className="btn btn-error btn-xs"
                        >
                            Confirm
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

export default ConfirmMakeAdminModal;
