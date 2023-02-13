import { counterpartiesApi } from ".";

const types = counterpartiesApi.injectEndpoints({
  endpoints: (builder) => ({
    getTypes: builder.query({
      query: () => 'types',
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, type) => {
          byId[type.id] = type
          return byId
        }, {})
        return byId
      },
    }),
    getType: builder.query({
      query: (id) => `types/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetTypesQuery,
  useGetTypeQuery
} = types;