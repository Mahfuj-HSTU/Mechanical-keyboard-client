const CustomizableOptions = () => {
  return (
    <div className='mt-14 py-10 shadow-xl border-t border-gray-300 shadow-slate-300 mb-9 rounded-xl'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-8'>
            Customizable Options
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>Key Switches</h3>
              <p className='text-gray-600'>
                Choose from a variety of key switches such as Cherry MX,
                Gateron, or Razer switches, offering different tactile feedback
                and actuation force.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>Keycaps</h3>
              <p className='text-gray-600'>
                Customize your keyboard with different keycap materials like PBT
                or ABS, and various keycap profiles such as sculpted or flat.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>RGB Lighting</h3>
              <p className='text-gray-600'>
                Enhance your setup with customizable RGB lighting effects,
                allowing you to personalize colors and patterns to match your
                preference or gaming setup.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>
                Programmable Macros
              </h3>
              <p className='text-gray-600'>
                Program macros and shortcuts for quick access to commands or
                actions, improving productivity and gaming performance.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>Case Design</h3>
              <p className='text-gray-600'>
                Choose from different case materials like aluminum or plastic,
                and various designs such as compact, full-sized, or ergonomic.
              </p>
            </div>
            <div className='p-6 bg-white shadow-lg rounded-lg'>
              <h3 className='text-xl font-semibold mb-2'>
                Software Integration
              </h3>
              <p className='text-gray-600'>
                Integrate with keyboard software to customize key assignments,
                lighting effects, and profiles, making it easier to manage and
                personalize your keyboard settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizableOptions;
