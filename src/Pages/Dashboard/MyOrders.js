/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SingleMyOrder from './SingleMyOrder';

function MyOrders() {
    const [user] = useAuthState(auth);
    const { email } = user;
    const { isLoading, data: orders } = useQuery('orders', () =>
        fetch(`http://localhost:5000/order/?email=${email}`).then((res) => res.json())
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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <SingleMyOrder key={order._id} order={order} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyOrders;
