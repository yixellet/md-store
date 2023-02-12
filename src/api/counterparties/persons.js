import { counterpartiesApi } from ".";

const persons = counterpartiesApi.injectEndpoints({
  endpoints: (builder) => ({
    getPersons: builder.query({
      query: (page = 1, size = 10) => `persons?page=${page}&size=${size}`,
      transformResponse: (responseData) => {
        return responseData
      },
    }),
    getPerson: builder.query({
      query: (id) => `persons/${id}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetPersonsQuery,
  useGetPersonQuery
} = persons;