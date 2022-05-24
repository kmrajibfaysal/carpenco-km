/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';

function MakeAdminRow({ user, refetch, setNewAdmin }) {
    const { name, email, role } = user;

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
                            {/* <img src={} alt="Avatar Tailwind CSS Component" /> */}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name || ''}</div>
                    </div>
                </div>
            </td>
            <td>{email || ''}</td>
            <td className="font-bold uppercase">
                {role || <span className="font-normal lowercase">Buyer</span>}
            </td>
            <th className="">
                {role === 'admin' ? (
                    ''
                ) : (
                    <label
                        htmlFor="delete-confirm-modal"
                        onClick={() => setNewAdmin(user)}
                        className="btn btn-primary btn-xs   text-white"
                    >
                        Make Admin
                    </label>
                )}
            </th>
        </tr>
    );
}

export default MakeAdminRow;
