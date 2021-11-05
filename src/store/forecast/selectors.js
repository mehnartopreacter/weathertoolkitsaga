export const selectToday = (state) => state.forecast.todayCast;
export const selectWeek = (state) => state.forecast.weekCast?.forecastday;
export const selectIsLoading = (state) => state.forecast.isLoading;
export const selectIsFailed = (state) => state.forecast.isFailed;
export const selectCity = (state) => state.forecast.location?.name;
