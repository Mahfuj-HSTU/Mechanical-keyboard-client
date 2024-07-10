import { toast } from 'sonner';
import { useAddProductMutation } from '../../redux/redux/api/productsApi';

const AddProduct = () => {
  const [addProduct, { isLoading, isSuccess, isError }] =
    useAddProductMutation();

  if (isLoading) {
    toast.loading('posting...', { id: 'addProduct' });
  }
  if (isSuccess) {
    toast.success('Successfully added a new keyboard ', { id: 'addProduct' });
  }
  if (isError) {
    toast.error('Failed to add a new keyboard ', { id: 'addProduct' });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const title = form.title.value;
    const brand = form.brand.value;
    const availableQuantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image = form.image.value;

    const product = {
      title,
      brand,
      price,
      rating,
      description,
      image,
      availableQuantity,
    };
    addProduct(product);
    console.log(product);
    form.reset();
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
                onSubmit={handleSubmit}
                className='rounded-xl text-blue-900 relative'>
                <label className='font-semibold pl-1'>Keyboard Name</label>{' '}
                <br />
                <input
                  type='text'
                  name='title'
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
                  name='brand'
                  placeholder='example: Logitech'
                  required
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Quantity</label> <br />
                <input
                  type='text'
                  name='quantity'
                  placeholder='keyboard quantity'
                  required
                  className='input input-bordered w-full max-w-md mb-3 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Price</label> <br />
                <input
                  type='text'
                  name='price'
                  placeholder='example - 100$'
                  required
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Rating</label> <br />
                <input
                  type='text'
                  name='rating'
                  placeholder='keyboard rating'
                  required
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Description</label> <br />
                <input
                  type='text'
                  name='description'
                  placeholder='keyboard description'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <br />
                <label className='font-semibold pl-1'>Image</label> <br />
                <input
                  type='text'
                  name='image'
                  placeholder='Give image link'
                  className='input input-bordered w-full max-w-md mb-7 mt-1'
                />
                <label
                  htmlFor='add-modal'
                  className='relative'>
                  <input
                    type='submit'
                    value='submit'
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
