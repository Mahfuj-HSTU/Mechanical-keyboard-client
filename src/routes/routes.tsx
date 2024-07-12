import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Products from '../pages/Products/Products';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProductDetails from '../pages/Products/ProductDetails';
import Cart from '../pages/cart/Cart';
import CheckOut from '../pages/CheckOut/CheckOut';
import Success from '../pages/CheckOut/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'product-management/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <CheckOut />,
      },
      {
        path: 'order-succeeded',
        element: <Success />,
      },
    ],
  },
]);

export default router;
