import { dictionariesApi } from './index';

const secretClasses = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getSecretClasses: builder.query({
      query: () => 'secret_classes',
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getSecretClass: builder.query({
      query: (id) => `secret_classes/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetSecretClassesQuery,
  useGetSecretClassQuery
} = secretClasses;