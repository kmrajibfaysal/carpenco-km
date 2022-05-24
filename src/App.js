import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import MakePayment from './Pages/Dashboard/MakePayment';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/index_Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Registration/Register';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import RequiredAuth from './Pages/Shared/RequireAuth';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/products/:productId"
                    element={
                        <RequiredAuth>
                            <Purchase />
                        </RequiredAuth>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequiredAuth>
                            <Dashboard />
                        </RequiredAuth>
                    }
                />
                <Route
                    path="/payment/:id"
                    element={
                        <RequiredAuth>
                            <MakePayment />
                        </RequiredAuth>
                    }
                />
                <Route
                    path="dashboard"
                    element={
                        <RequiredAuth>
                            <Dashboard />
                        </RequiredAuth>
                    }
                >
                    <Route index element={<MyProfile />} />
                    <Route path="review" element={<MyReview />} />
                    <Route path="myOrder" element={<MyOrders />} />
                    <Route path="manage_all_order" element={<ManageOrders />} />
                    <Route path="manage_products" element={<ManageProducts />} />
                    <Route path="add_a_product" element={<AddProduct />} />
                    <Route path="make_admin" element={<MakeAdmin />} />
                    {/* <Route path="payment/:id" element={<Payment />} /> */}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <Footer />
        </div>
    );
}

export default App;
