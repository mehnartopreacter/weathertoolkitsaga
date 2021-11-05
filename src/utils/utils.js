export const convertApiDateToDay = (date) => {
  return new Date(date).toLocaleString("en-US", {
    weekday: "long",
  });
};
