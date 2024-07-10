import { useGetAllProductsQuery } from '../../redux/redux/api/productsApi';
import ProductCard from './ProductCard';

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  if (isError) {
    return <p>Error fetching products</p>;
  }
  // console.log(products);
  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <h2 className='text-start px-4 py-6 text-blue-900 text-4xl font-semibold mb-5 rounded-xl mx-3'>
        All Keyboards
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            isLoading={isLoading}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
