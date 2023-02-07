import { dictionariesApi } from './index';

const groups = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
      transformResponse: (responseData) => responseData.data,
    }),
    getGroup: builder.query({
      query: (id) => `groups/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useGetGroupQuery
} = groups;