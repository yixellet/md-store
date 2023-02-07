import { metadataApi } from './index';

const subtypes = metadataApi.injectEndpoints({
  endpoints: (builder) => ({
    getFields: builder.query({
      query: (group) => `fields${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getField: builder.query({
      query: (id) => `subtypes/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetFieldsQuery,
  useGetFieldQuery
} = subtypes;