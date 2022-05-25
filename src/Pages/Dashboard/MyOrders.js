/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ConfirmModal from './ConfirmModal';
import SingleMyOrder from './SingleMyOrder';

function MyOrders() {
    const [user] = useAuthState(auth);
    const [cancellingOrder, setCancellingOrder] = useState(null);

    const { email } = user;
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery('orders', () =>
        fetch(`https://carpenco-server.herokuapp.com/order/?email=${email}`).then((res) =>
            res.json()
        )
    );

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
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <SingleMyOrder
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                isLoading={isLoading}
                                setCancellingOrder={setCancellingOrder}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <ConfirmModal
                refetch={refetch}
                isLoading={isLoading}
                cancellingOrder={cancellingOrder}
                setCancellingOrder={setCancellingOrder}
            />
        </div>
    );
}

export default MyOrders;
