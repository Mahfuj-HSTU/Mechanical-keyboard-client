import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../redux/redux/api/productsApi';
import Loading from '../Shared/Loading/Loading';
import StarRating from './StarRating';
import { useAppDispatch } from '../../redux/redux/hooks';
import { addToCart } from '../../redux/redux/features/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductDetailsQuery(id);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !product) {
    return <h1>Error fetching product details</h1>;
  }

  return (
    <div className='m-10 mt-0 p-6 shadow-xl shadow-slate-300'>
      <h1 className='text-4xl font-bold mb-4'>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-[450px] mb-4'
      />
      <p className='text-xl'>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className='text-xl'>
        <strong>Available Quantity:</strong> {product.availableQuantity}
      </p>
      <p className='text-xl'>
        <strong>Price:</strong> ${product.price}
      </p>
      <p className='text-xl'>
        <strong>Description:</strong> {product.description}
      </p>
      <p className='text-xl flex items-center gap-3'>
        <strong>Rating:</strong> <StarRating rating={product.rating} />
      </p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className='btn btn-info mt-9 text-xl'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
