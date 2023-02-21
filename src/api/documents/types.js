import { documentsApi } from './index';

const types = documentsApi.injectEndpoints({
  endpoints: (builder) => ({
    getTypes: builder.query({
      query: () => `types`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getType: builder.query({
      query: (id) => `types/${id}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetTypesQuery,
  useGetTypeQuery
} = types;