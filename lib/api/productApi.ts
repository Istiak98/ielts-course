import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApiResponse } from '@/types/product';
import { API_BASE_URL } from '../api';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('X-TENMS-SOURCE-PLATFORM', 'web');
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query<ApiResponse, { slug: string; lang?: string }>({
      query: ({ slug, lang = 'en' }) => ({
        url: `/products/${slug}`,
        params: { lang },
      }),
      providesTags: (result, error, { slug }) => [
        { type: 'Product', id: slug },
      ],
    }),
  }),
});

export const { useGetProductQuery } = productApi;
