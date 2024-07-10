export type TProduct = {
  _id: string;
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TStarRatingProps = {
  rating: number;
};

export type TReviewProps = {
  review: {
    id: number;
    name: string;
    img: string;
    userReview: string;
    location: string;
  };
};
