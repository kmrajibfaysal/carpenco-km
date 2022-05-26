import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import LoginPageHeader from '../Shared/LoginPageHeader';
// import useAdmin from '../../hooks/useAdmin';

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const { email } = user;
    const { data: adminData, isLoading } = useQuery('adminData', () =>
        fetch(`https://carpenco-server.herokuapp.com/users/${email}`).then((res) => res.json())
    );

    if (isLoading || loading) return <Loading />;

    // const [admin] = useAdmin(user);
    return (
        // eslint-disable-next-line prettier/prettier
        <div className="drawer-mobile  drawer font-josefin">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <LoginPageHeader text1="Dashboard" />
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay" />
                <ul className="menu w-48 overflow-y-auto bg-base-100 p-4 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">My Profile</Link>
                    </li>
                    {adminData?.role === 'admin' ? (
                        <>
                            <li>
                                <Link to="/dashboard/manage_all_order">Manage All Orders</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manage_products">Manage Products</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/add_a_product">Add a Product</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/make_admin">Make Admin</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/dashboard/myOrder">My Orders</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review">Add a Review</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
