import { Link, useLocation } from 'react-router-dom';
import StarRating from './StarRating';
import { TProduct } from '../../Utils/Utils';
import { removeFromCart } from '../../redux/redux/features/cartSlice';
import { useAppDispatch } from '../../redux/redux/hooks';
import { MdDelete } from 'react-icons/md';

const ProductCard = ({
  product,
  isLoading,
}: {
  product: TProduct;
  isLoading: boolean;
}) => {
  const { image, title, brand, price, availableQuantity, rating, _id } =
    product;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  return (
    <div>
      {isLoading ? (
        <div className='skeleton w-96 h-48 bg-gray-300 animate-pulse'></div>
      ) : (
        <div className='card w-96 bg-white shadow-lg rounded-lg overflow-hidden'>
          <figure className='relative'>
            <img
              className='h-48 w-full object-cover p-6'
              src={image}
              alt='product image'
            />
            <div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md'>
              <span className='text-sm font-semibold'>
                <StarRating rating={rating} />
              </span>
            </div>
            {pathname.includes('cart') && (
              <div className='grid place-items-center absolute top-0 right-0 bg-indigo-500 text-white h-9 w-9 rounded-full'>
                <h2 className='font-semibold'>{product?.quantity}</h2>
              </div>
            )}
          </figure>
          <div className='card-body p-4 pb-7'>
            <h2 className='card-title text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-gray-600 mb-1'>
              <span className='font-semibold'>Brand:</span> {brand}
            </p>
            <p className='text-gray-600 mb-1'>
              <span className='font-semibold'>In Stock:</span>{' '}
              {availableQuantity}
            </p>
            <p className='text-gray-900 text-lg font-semibold'>${price}</p>

            <div className='mt-4'>
              {pathname.includes('cart') ? (
                <button
                  onClick={() => dispatch(removeFromCart(product))}
                  className='bg-red-700  py-2 px-6 rounded-full'>
                  <p className='flex text-white items-center justify-around font-semibold'>
                    Remove from cart <MdDelete className='pt-1 text-2xl' />
                  </p>
                </button>
              ) : (
                <Link
                  to={`/product/${_id}`}
                  className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
                  See Details
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
