import { useParams } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../../redux/redux/api/productsApi';
import Loading from '../Shared/Loading/Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductDetailsQuery(id);
  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    return <h1>Error fetching product details</h1>;
  }

  console.log(product);

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>{product?.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-64 object-cover mb-4'
      />
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Available Quantity:</strong> {product.availableQuantity}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} ★
      </p>
    </div>
  );
};

export default ProductDetails;
