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

import { Provider } from 'react-redux'
import { store } from './redux/store.js'



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
        
        ]
      },
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router = {router} />
  </Provider>,
)
