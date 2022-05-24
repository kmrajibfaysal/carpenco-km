import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ConfirmMakeAdminModal from './ConfirmMakeAdminModal';
import MakeAdminRow from './MakeAdminRow';

function MakeAdmin() {
    const [newAdmin, setNewAdmin] = useState(null);
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery('users', () => fetch(`http://localhost:5000/users`).then((res) => res.json()));

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-3xl">My orders</h2>
            <div className="w-full overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>User</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <MakeAdminRow
                                setNewAdmin={setNewAdmin}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                isLoading={isLoading}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <ConfirmMakeAdminModal newAdmin={newAdmin} refetch={refetch} />
        </div>
    );
}

export default MakeAdmin;
