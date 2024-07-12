import { useGetAllProductsQuery } from '../../redux/redux/api/productsApi';
import { useAppSelector } from '../../redux/redux/hooks';
import { TProduct } from '../../Utils/Utils';
import ProductCard from '../Products/ProductCard';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const { data: products, isLoading } = useGetAllProductsQuery();

  const filteredProducts = products?.filter((product) => {
    return cart.some((item) => item._id === product._id);
  });

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const isOutOfStock = filteredProducts?.some(
    (product) => product.availableQuantity === 0
  );

  if (isLoading) {
    <Loading />;
  }

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
                  {product.title} x {product.quantity}{' '}
                  <span className='ml-3 text-red-800 font-semibold'>
                    {isOutOfStock ? '"Out of Stock!"' : null}
                  </span>
                </span>
                <span>${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className='divider'></div>
            <div className='flex justify-between items-center font-bold text-xl'>
              <span>Grand Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='divider'></div>
            <div className='text-center mt-4'>
              <Link
                to='/checkout'
                className={`btn btn-primary font-semibold text-lg text-white ${
                  isOutOfStock ? 'btn-disabled' : ''
                }`}
                onClick={(e) => isOutOfStock && e.preventDefault()}>
                Check Out
              </Link>
              {isOutOfStock && (
                <p className='text-red-600 mt-2'>
                  Cannot proceed to checkout. Some items are out of stock.
                </p>
              )}
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

// ${!available ? 'btn-disabled' : null}
