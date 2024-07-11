import { MdOutlineDeleteOutline } from 'react-icons/md';
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from '../../redux/redux/api/productsApi';
import AddProduct from './AddProduct';
import { BiEdit } from 'react-icons/bi';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'sonner';
import { TProduct } from '../../Utils/Utils';

const Dashboard = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const [deleteKeyboard, { isSuccess }] = useDeleteProductMutation();

  if (isLoading) {
    <Loading />;
  }
  if (isError) {
    return <p>Error fetching products</p>;
  }
  if (isSuccess) {
    toast.success('Product deleted successfully');
  }

  const handleDelete = (product: TProduct) => {
    const agree = window.confirm(`Are you sure? you want to delete the item?`);
    if (agree) {
      deleteKeyboard(product);
    }
  };

  return (
    <div className='md:my-5 mb-5'>
      <div className='lg:flex lg:justify-between mb-4 p-4 pt-12 md:pt-6 lg:pt-5 bg-slate-300 rounded-lg md:ml-4'>
        <div className='lg:flex lg:justify-between gap-9'>
          <span className='flex justify-between gap-5 mb-3'>
            <h2 className='text-4xl mb-4'>Products List</h2>
            <input
              className='lg:hidden block btn btn-primary rounded-xl w-20'
              value='Add'
            />
          </span>
        </div>

        <label
          htmlFor='add-modal'
          className='hidden btn btn-info rounded-xl w-32 lg:grid place-items-center'>
          Add Product
        </label>
      </div>
      <table className='table table-compact w-full border-2 shadow-lg md:mx-4 mx-0 overflow-x-scroll'>
        <thead className='text-center bg-slate-200 font-semibold'>
          <tr className='text-[17px]'>
            <th className='border-2 border-r-slate-300'>SL No.</th>
            <th className='border-2 border-r-slate-300'>Product Name</th>
            <th className='border-2 border-r-slate-300'>Price</th>
            <th className='border-2 border-r-slate-300'>Brand</th>
            <th className='border-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr
              key={product?._id}
              className='border-2'>
              <td className='border-2 text-center w-16'>{i + 1}</td>
              <td className='border-2 font-semibold w-96'>
                <label htmlFor='my-modal'>{product.title}</label>
              </td>
              <td className='border-2 text-center'>{product.price}</td>
              <td className='border-2 w-80'>{product.brand}</td>
              <td className='border-2 text-center p-0'>
                <button
                  onClick={() => handleDelete(product)}
                  className='text-red-600 text-2xl mr-7'>
                  <MdOutlineDeleteOutline />
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className='text-blue-600 text-2xl ml-7'>
                  <BiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddProduct />
    </div>
  );
};

export default Dashboard;
