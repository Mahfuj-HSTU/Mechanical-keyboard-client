const Products = () => {
  return (
    <div className='max-w-screen-xl mx-auto mb-9'>
      <h2 className='text-start px-4 py-6 text-blue-900 text-lg shadow-xl shadow-slate-300 mb-5 rounded-xl mx-3'>
        Students admitted to the faculties reside in or are attached to a hall
        of residence. The university has{' '}
        <span className='font-bold italic'>nine</span> halls of residence{' '}
        <span className='font-bold italic'>four</span> for male students,{' '}
        <span className='font-bold italic'>four</span> for female students and{' '}
        <span className='font-bold italic'>one</span> for international
        students. Halls are headed by a provost (called Hall Super) who is
        assisted by house tutors and assistant house tutors. The administration
        of a dormitory is controlled by a Hall President and his/her assistants.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
        products card
      </div>
    </div>
  );
};

export default Products;
