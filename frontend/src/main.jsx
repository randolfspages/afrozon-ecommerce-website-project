import { } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Shop from './shop/Shop.jsx'
import Pages from './pages/Pages.jsx'
import Contact from './pages/Contact.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Search from './pages/Search.jsx'
import SingleProduct from './shop/productDetails/SingleProduct.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import PaymentSuccess from './components/PaymentSuccess.jsx'



const router = createBrowserRouter([
      {
        path:'/',
        element:<App />,
        children: [
          {path:'/', element:<Home />},
          {path:'/shop', element:<Shop />},
          {path:'/pages', element:<Pages />},
          {path:'/contact', element:<Contact />},
          {path:'/categories/:categoryName', element:<CategoryPage />},
          {path:'/search', element:<Search />},
          {path:'/shop/:id', element:<SingleProduct />},
          {path:'/success', element: <PaymentSuccess />}
          
        
        ]
      },

      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/register',
        element:<Register />
      },
      
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router = {router} />
  </Provider>,
)
