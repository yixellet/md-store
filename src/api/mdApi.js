import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mdApi = createApi({
  reducerPath: 'mdApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
      transformResponse: (responseData) => responseData.data,
    }),
    getAccessConditions: builder.query({
      query: () => 'access_conditions',
      transformResponse: (responseData) => responseData.data,
    }),
    getHeightSystems: builder.query({
      query: () => 'height_systems',
      transformResponse: (responseData) => responseData.data,
    }),
    getReferenceSystems: builder.query({
      query: () => 'reference_systems',
      transformResponse: (responseData) => responseData.data,
    }),
    getRegions: builder.query({
      query: () => 'regions',
      transformResponse: (responseData) => responseData.data,
    }),
    getScales: builder.query({
      query: () => 'scales',
      transformResponse: (responseData) => responseData.data,
    }),
    getSecretClasses: builder.query({
      query: () => 'secret_classes',
      transformResponse: (responseData) => responseData.data,
    }),
    getStorageFormats: builder.query({
      query: () => 'storage_formats',
      transformResponse: (responseData) => responseData.data,
    }),
    getSubtypes: builder.query({
      query: () => 'subtypes',
      transformResponse: (responseData) => responseData.data,
    })
  }),
});

export const {
  useGetGroupsQuery,
  useGetAccessConditionsQuery,
  useGetHeightSystemsQuery,
  useGetReferenceSystemsQuery,
  useGetRegionsQuery,
  useGetScalesQuery,
  useGetSecretClassesQuery,
  useGetStorageFormatsQuery,
  useGetSubtypesQuery
} = mdApi;