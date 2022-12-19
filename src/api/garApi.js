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
      query: (street) => `houses?objectid=${street.objectid}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getApartments: builder.query({
      query: (house) => `apartments?objectid=${house.id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useAddressLiveSearchQuery,
  useGetHousesQuery,
  useGetApartmentsQuery
} = garApi;