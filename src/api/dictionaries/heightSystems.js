import { dictionariesApi } from './index';

const heightSystems = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getHeightSystems: builder.query({
      query: () => 'height_systems',
      transformResponse: (responseData) => responseData.data,
    }),
    getHeightSystem: builder.query({
      query: (id) => `height_systems/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetHeightSystemsQuery,
  useGetHeightSystemQuery
} = heightSystems;