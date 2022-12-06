import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mdApi = createApi({
  reducerPath: 'mdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetGroupsQuery
} = mdApi;