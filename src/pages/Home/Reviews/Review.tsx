import { TReviewProps } from '../../../Utils/Utils';

const Review = ({ review }: TReviewProps) => {
  const { name, img, userReview, location } = review;
  return (
    <div className='card shadow-xl'>
      <div className='card-body'>
        <p>{userReview}</p>
        <div className='flex items-center gap-5 mt-6'>
          <div className='avatar'>
            <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img
                src={img}
                alt=''
              />
            </div>
          </div>
          <div>
            <h5 className='text-lg'>{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
