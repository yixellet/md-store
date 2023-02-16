import { dictionariesApi } from './index';

const regions = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: (district) => `regions${district ? `?district=${district}` : ''}`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getRegion: builder.query({
      query: (id) => `region/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getFederalDistricts: builder.query({
      query: () => `federal_districts`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
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