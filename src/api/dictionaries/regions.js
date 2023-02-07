import { dictionariesApi } from './index';

const regions = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: (district) => `regions${district ? `?district=${district}` : ''}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getRegion: builder.query({
      query: (id) => `region/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getFederalDistricts: builder.query({
      query: () => `federal_districts`,
      transformResponse: (responseData) => responseData.data,
    }),
    getFederalDistrict: builder.query({
      query: (id) => `federal_districts/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useGetRegionQuery,
  useGetFederalDistrictsQuery,
  useGetFederalDistrictQuery
} = regions;