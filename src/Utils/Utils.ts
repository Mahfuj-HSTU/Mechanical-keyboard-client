export type TProduct = {
  preventDefault(): unknown;
  target?: any;
  _id: string;
  image?: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  quantity?: number;
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

export type TProductFiltersProps = {
  priceRange: string;
  onSortChange: () => void;
  sortOrder: 'asc' | 'desc';
  handlePriceChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
