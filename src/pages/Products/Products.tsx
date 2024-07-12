import { useState } from 'react';
import { useGetAllProductsQuery } from '../../redux/redux/api/productsApi';
import Loading from '../Shared/Loading/Loading';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

const Products = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error fetching products</p>;
  }
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const filteredProducts = products?.filter((product) => {
    if (search === '') {
      return true;
    } else if (
      product?.title
        ?.toString()
        .toLowerCase()
        .includes(search?.toString().toLowerCase()) ||
      product?.brand
        ?.toString()
        .toLowerCase()
        .includes(search?.toString().toLowerCase())
    ) {
      return product;
    }
    return false;
  });
  const priceFilteredProducts = filteredProducts?.filter((product) => {
    if (!product || !priceRange) return true;
    const [min, max] = priceRange.split('-').map(Number);
    const price = product.price;
    if (isNaN(min) && max && price > max) return false;
    if (isNaN(max) && min && price < min) return false;
    if (!isNaN(min) && !isNaN(max) && (price < min || price > max))
      return false;
    return true;
  });

  const sortedProducts = priceFilteredProducts
    ?.slice()
    .sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const clearFilters = () => {
    setSearch('');
    setPriceRange('');
  };

  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <div className='lg:flex gap-10'>
        <h2 className='text-start px-4 lg:py-6 text-blue-900 text-4xl font-semibold mb-5 rounded-xl mx-3'>
          All Keyboards
          <input
            value={search}
            id='searchName'
            className='input input-bordered p-2 w-72 rounded-xl md:ml-10 mt-5 md:mt-4 lg:mt-0'
            type='text'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
        </h2>
        <div className='flex lg:py-6 py-3 gap-5 ml-5'>
          <ProductFilter
            handlePriceChange={handlePriceChange}
            priceRange={priceRange}
            onSortChange={handleSortChange}
            sortOrder={sortOrder}
          />
          <button
            className='btn btn-sm btn-outline-red'
            onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
        {sortedProducts?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
