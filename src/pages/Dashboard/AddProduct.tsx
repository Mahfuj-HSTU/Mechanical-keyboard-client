import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useAddProductMutation } from '../../redux/redux/api/productsApi';
import { TProduct } from '../../Utils/Utils';

const AddProduct = () => {
  const [addProduct, { isLoading, isSuccess, isError }] =
    useAddProductMutation();
  const { register, handleSubmit, reset } = useForm<TProduct>();

  useEffect(() => {
    if (isLoading) {
      toast.loading('Posting...', { id: 'addProduct' });
    }
    if (isSuccess) {
      toast.success('Successfully added a new keyboard', { id: 'addProduct' });
    }
    if (isError) {
      toast.error('Failed to add a new keyboard', { id: 'addProduct' });
    }
  }, [isLoading, isSuccess, isError]);

  const onSubmit = async (data: TProduct) => {
    const checkbox = document.getElementById('add-modal') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    addProduct(data);
    // console.log(data);
    reset();
  };

  return (
    <div>
      <input
        type='checkbox'
        id='add-modal'
        className='modal-toggle '
      />
      <div className='modal'>
        <div className='modal-box relative max-w-xl'>
          <label
            htmlFor='add-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h1 className='text-4xl font-bold py-2 text-blue-800'>
            Add Keyboard
          </h1>
          <div className='card w-full '>
            <div className='card-body text-start'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Keyboard Name</label>{' '}
                <br />
                <input
                  type='text'
                  {...register('title', { required: true })}
                  placeholder='keyboard name'
                  required
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>
                  Keyboard Brand
                </label>{' '}
                <br />
                <input
                  type='text'
                  {...register('brand', { required: true })}
                  placeholder='example: Logitech'
                  required
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Quantity</label> <br />
                <input
                  type='number'
                  {...register('availableQuantity', { required: true })}
                  placeholder='keyboard quantity'
                  required
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Price</label> <br />
                <input
                  type='number'
                  {...register('price', { required: true })}
                  placeholder='example - 100$'
                  required
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Rating</label> <br />
                <input
                  type='number'
                  {...register('rating', { required: true })}
                  placeholder='keyboard rating'
                  required
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Description</label> <br />
                <textarea
                  {...register('description')}
                  placeholder='keyboard description'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Image</label> <br />
                <input
                  type='text'
                  {...register('image')}
                  placeholder='Give image link'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <label
                  htmlFor='add-modal'
                  className='relative'>
                  <input
                    type='submit'
                    value='Submit'
                    className='bg-teal-300 cursor-pointer font-semibold input input-bordered w-full max-w-md'
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
