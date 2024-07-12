import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../redux/redux/hooks';
import { useUpdateProductMutation } from '../../redux/redux/api/productsApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const { register, handleSubmit } = useForm();
  const cart = useAppSelector((state) => state.cart.cart);
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();
  const navigate = useNavigate();
  // console.log(cart);
  if (isSuccess) {
    toast.success('Order is placed successfully');
    navigate('/order-succeeded');
  }

  const onSubmit = () => {
    const updatedProducts = cart.map((product) => {
      const updatedProduct = { ...product };
      updatedProduct.availableQuantity =
        updatedProduct.availableQuantity - updatedProduct.quantity;
      return updatedProduct;
    });
    updatedProducts.forEach((product) => {
      const products = {
        id: product._id,
        data: product,
      };
      // console.log(products);
      updateProduct(products);
    });
  };

  return (
    <div className='max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Delivery Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-gray-700 font-semibold mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: 'Name is required' })}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: 'Email is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='phone'
            className='block text-gray-700 font-semibold mb-2'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            {...register('phone', {
              required: 'phone number is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='address'
            className='block text-gray-700 font-semibold mb-2'>
            Delivery Address
          </label>
          <textarea
            id='address'
            {...register('address', {
              required: 'Delivery address is required',
            })}
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
