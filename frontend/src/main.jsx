import {} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/shop/Shop.jsx';
import Pages from './pages/Pages.jsx';
import Contact from './pages/Contact.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/search/Search.jsx';
import SingleProduct from './pages/shop/productDetails/SingleProduct.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx';
import PrivateRoute from './routers/PrivateRoute.jsx';
import UserDMain from './pages/dashboard/user/dashboard/UserDMain.jsx';
import UserOrders from './pages/dashboard/user/UserOrders.jsx';
import OrderDetails from './pages/dashboard/user/OrderDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/pages', element: <Pages /> },
      { path: '/contact', element: <Contact /> },
      { path: '/categories/:categoryName', element: <CategoryPage /> },
      { path: '/search', element: <Search /> },
      { path: '/shop/:id', element: <SingleProduct /> },
      { path: '/success', element: <PaymentSuccess /> },
      { path: '/orders/:orderId', element: <OrderDetails/>},
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  // Dashboard routes starts here
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ), // Todo Task: user Private Route
    children: [
      // user routes
      { path: '', element: <UserDMain/> },
      { path: 'orders', element: <UserOrders/> },
      { path: 'payments', element: <div>User's Payment/s</div> },
      { path: 'profile', element: <div>User's Profile</div> },
      { path: 'reviews', element: <div>User's Review/s</div> },

      // Admin routes (strictly by Admin), Todo: Private Routes with  role field
      {
        path: 'admin',
        element: (
          <PrivateRoute role="admin">
            <div>Admin Main</div>
          </PrivateRoute>
        ),
      },

      {
        path: 'add-new-post',
        element: (
          <PrivateRoute role="admin">
            <div>New Post</div>
          </PrivateRoute>
        ),
      },

      {
        path: 'manage-products',
        element: (
          <PrivateRoute role="admin">
            <div>Manage Post</div>
          </PrivateRoute>
        ),
      },

      {
        path: 'update-product/:id',
        element: (
          <PrivateRoute role="admin">
            <div>Update Post</div>
          </PrivateRoute>
        ),
      },

      {
        path: 'users',
        element: (
          <PrivateRoute role="admin">
            <div>All Users</div>
          </PrivateRoute>
        ),
      },

      {
        path: 'manage-orders',
        element: (
          <PrivateRoute role="admin">
            <div>Manage Orders</div>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
