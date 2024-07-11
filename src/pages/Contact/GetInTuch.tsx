import { useForm, FieldValues } from 'react-hook-form';

const GetInTouch = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
      <h2 className='text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-6'>
        <div>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: true })}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Your Name'
          />
        </div>
        <div>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: true })}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Your Email'
          />
        </div>
        <div>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            {...register('message', { required: true })}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            // rows='5'
            placeholder='Your Message'></textarea>
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
