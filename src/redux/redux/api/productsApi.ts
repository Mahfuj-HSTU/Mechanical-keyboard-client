import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type TProduct = {
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

export const productsApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    getProductDetails: builder.query<TProduct[], void>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } =
  productsApi;
