import people1 from '../../../assets/images/image1.jpg';
import people2 from '../../../assets/images/image2.avif';
import people3 from '../../../assets/images/image3.jpg';
import Review from './Review';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Alice Johnson',
      img: people1,
      userReview:
        'I absolutely love this keyboard! It has a great feel and the keys are very responsive.',
      location: 'New York',
    },
    {
      id: 2,
      name: 'John Smith',
      img: people2,
      userReview:
        "This keyboard exceeded my expectations. It's sturdy and the backlighting is perfect for late-night work.",
      location: 'Los Angeles',
    },
    {
      id: 3,
      name: 'Emily Brown',
      img: people3,
      userReview:
        "Highly recommend this keyboard! It's stylish, comfortable to type on, and easy to set up.",
      location: 'Chicago',
    },
  ];

  return (
    <div className='my-16 border-t border-gray-300 mb-9 shadow-xl shadow-slate-300 p-7'>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-4xl mb-4 font-semibold'>
            What Our Customer Says
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
