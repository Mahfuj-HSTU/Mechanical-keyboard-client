import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { TProduct } from '../../Utils/Utils';
import { useUpdateProductMutation } from '../../redux/redux/api/productsApi';

const UpdateProduct = ({ selected }: { selected: TProduct }) => {
  const { register, handleSubmit, reset } = useForm<TProduct>();
  const [updateProduct, { isError, isSuccess }] = useUpdateProductMutation();
  const { title, brand, price, availableQuantity, rating, description, image } =
    selected;

  useEffect(() => {
    if (isSuccess) {
      toast.success('Keyboard updated successfully', { id: 'updateProduct' });
    }
    if (isError) {
      toast.error('Failed to update the keyboard', { id: 'updateProduct' });
    }
  }, [isSuccess, isError]);

  const onSubmit = async (data: TProduct) => {
    const productData = {
      data,
      id: selected._id,
    };
    const checkbox = document.getElementById(
      'update-modal'
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    await updateProduct(productData);
    reset();
  };

  return (
    <div>
      <input
        type='checkbox'
        id='update-modal'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box relative max-w-xl'>
          <label
            htmlFor='update-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h1 className='text-2xl font-bold py-2 text-blue-800'>
            Update The {title}
          </h1>
          <div className='card w-full '>
            <div className='card-body text-start'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Keyboard Name</label>{' '}
                <br />
                <input
                  defaultValue={title}
                  type='text'
                  {...register('title')}
                  placeholder='keyboard name'
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>
                  Keyboard Brand
                </label>{' '}
                <br />
                <input
                  defaultValue={brand}
                  type='text'
                  {...register('brand')}
                  placeholder='example: Logitech'
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Quantity</label> <br />
                <input
                  defaultValue={availableQuantity}
                  type='number'
                  {...register('availableQuantity')}
                  placeholder='keyboard quantity'
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Price</label> <br />
                <input
                  defaultValue={price}
                  type='number'
                  {...register('price')}
                  placeholder='example - 100$'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Rating</label> <br />
                <input
                  defaultValue={rating}
                  type='float'
                  {...register('rating')}
                  placeholder='keyboard rating'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Description</label> <br />
                <textarea
                  defaultValue={description}
                  {...register('description')}
                  placeholder='keyboard description'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Image</label> <br />
                <input
                  defaultValue={image}
                  type='text'
                  {...register('image')}
                  placeholder='Give image link'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <label
                  htmlFor='update-modal'
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

export default UpdateProduct;
