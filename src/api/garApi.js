import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const garApi = createApi({
  reducerPath: 'garApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    addressLiveSearch: builder.query({
      query: (string) => `search_address?string=${string}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getHouses: builder.query({
      query: (objectid) => `houses?objectid=${objectid}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getApartments: builder.query({
      query: (objectid) => `apartments?objectid=${objectid}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useAddressLiveSearchQuery,
  useGetHousesQuery,
  useGetApartmentsQuery
} = garApi;