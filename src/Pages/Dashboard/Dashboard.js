/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import LoginPageHeader from '../Shared/LoginPageHeader';
// import useAdmin from '../../hooks/useAdmin';

function Dashboard() {
    const [user] = useAuthState(auth);

    // const [admin] = useAdmin(user);
    return (
        <div className="drawer-mobile drawer font-josefin">
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
                        <Link to="/dashboard">My Orders</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">Add a Review</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile">My Profile</Link>
                    </li>
                    {/* {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addDoctor">Add a Doctor</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
                            </li>
                        </>
                    )} */}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
