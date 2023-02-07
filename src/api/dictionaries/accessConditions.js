import { dictionariesApi } from './index';

const accessConditions = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccessConditions: builder.query({
      query: () => 'access_conditions',
      transformResponse: (responseData) => responseData.data,
    }),
    getAccessCondition: builder.query({
      query: (id) => `access_conditions/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetAccessConditionsQuery,
  useGetAccessConditionQuery
} = accessConditions;