import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct } from '../../../Utils/Utils';

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
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery } =
  productsApi;
