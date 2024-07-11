import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct } from '../../../Utils/Utils';

export const productsApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
  }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    getProductDetails: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    addProduct: builder.mutation({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['products'],
    }),

    deleteProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: JSON.stringify(product.data),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
