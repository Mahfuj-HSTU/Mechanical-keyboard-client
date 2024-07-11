import { useAppSelector } from '../../redux/redux/hooks';
import { TProduct } from '../../Utils/Utils';
import ProductCard from '../Products/ProductCard';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  // console.log(cart);
  return (
    <div className='max-w-screen-xl mx-auto my-9'>
      {cart.length !== 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 '>
          {cart.map((product) => (
            <ProductCard
              key={product._id}
              isLoading={false}
              product={product as TProduct}></ProductCard>
          ))}
        </div>
      ) : (
        <h2 className='text-2xl font-semibold'>
          No items found!! Please add some items.
        </h2>
      )}
    </div>
  );
};

export default Cart;
