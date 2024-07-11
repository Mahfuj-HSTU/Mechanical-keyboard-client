import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/redux/hooks';
import { TProduct } from '../../Utils/Utils';
import ProductCard from '../Products/ProductCard';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(cart);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cart]);
  return (
    <div className='max-w-screen-xl mx-auto my-9'>
      {cart.length !== 0 ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 '>
            {cart.map((product) => (
              <ProductCard
                key={product._id}
                isLoading={false}
                product={product as TProduct}
              />
            ))}
          </div>
          <div className='max-w-screen-lg mx-auto mt-9 p-4 border-t border-gray-300 shadow-xl shadow-slate-300 rounded-xl'>
            <h2 className='text-2xl font-semibold'>Total Price:</h2>
            {cart.map((product) => (
              <div
                key={product._id}
                className='flex justify-between items-center mb-2'>
                <span>
                  {product.title} x {product.quantity}
                </span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className='divider'></div>
            <div className='flex justify-between items-center font-bold text-xl'>
              <span>Grand Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='text-center mt-7'>
              <Link
                to='/checkout'
                className='btn btn-primary font-semibold text-lg text-white'>
                Check Out
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h2 className='text-2xl font-semibold'>
          No items found!! Please add some items.
        </h2>
      )}
    </div>
  );
};

export default Cart;
