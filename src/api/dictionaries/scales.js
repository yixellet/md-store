import { dictionariesApi } from './index';

const scales = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getScales: builder.query({
      query: () => 'scales',
      transformResponse: (responseData) => responseData.data,
    }),
    getScale: builder.query({
      query: (id) => `scales/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetScalesQuery,
  useGetScaleQuery
} = scales;