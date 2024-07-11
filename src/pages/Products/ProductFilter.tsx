import { TProductFiltersProps } from '../../Utils/Utils';

const ProductFilter = ({
  handlePriceChange,
  priceRange,
  onSortChange,
  sortOrder,
}: TProductFiltersProps) => {
  return (
    <div className='flex'>
      <label className='font-semibold mt-2'>Price Range:</label>
      <select
        className='input input-bordered ml-2'
        value={priceRange}
        onChange={handlePriceChange}>
        <option value=''>All Prices</option>
        <option value='0-50'>$0 - $50</option>
        <option value='51-100'>$51 - $100</option>
        <option value='101-150'>$101 - $150</option>
        <option value='151-200'>$151 - $200</option>
        <option value='201-300'>$201 - $300</option>
        <option value='301-400'>$301 - $400</option>
        <option value='401-600'>$401 - $600</option>
        <option value='601-800'>$601 - $800</option>
      </select>
      <div>
        <label className='font-semibold ml-4'>Sort by Price:</label>
        <button
          className='btn btn-sm btn-outline-blue ml-2'
          onClick={onSortChange}>
          {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
