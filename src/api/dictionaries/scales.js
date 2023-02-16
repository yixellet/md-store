import { dictionariesApi } from './index';

const scales = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getScales: builder.query({
      query: () => 'scales',
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
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