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
      query: (street) => `houses?objectid=${street}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getApartments: builder.query({
      query: (house) => `apartments?objectid=${house}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getObjectLevel: builder.query({
      query: (objectid) => `level?objectid=${objectid}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getObjectParents: builder.query({
      query: (objectid) => `parents?objectid=${objectid}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useAddressLiveSearchQuery,
  useGetHousesQuery,
  useGetApartmentsQuery,
  useGetObjectLevelQuery,
  useGetObjectParentsQuery
} = garApi;