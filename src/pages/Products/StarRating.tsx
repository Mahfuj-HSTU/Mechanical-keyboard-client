import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { TStarRatingProps } from '../../Utils/Utils';

const StarRating = ({ rating }: TStarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className='flex'>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar
          key={index}
          className='text-yellow-500'
        />
      ))}
      {halfStar && <FaStarHalfAlt className='text-yellow-500' />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={index}
          className='text-yellow-500'
        />
      ))}
    </div>
  );
};

export default StarRating;
