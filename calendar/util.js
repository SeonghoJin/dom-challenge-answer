export const getTopPosition = (time) => {
  const [hour, minute] = time.split(":");

  return hour * 50 + parseInt((minute / 60) * 50);
};
