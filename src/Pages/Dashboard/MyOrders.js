import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

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
            <p>{orders.length}</p>
        </div>
    );
}

export default MyOrders;
