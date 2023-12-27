const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const dateFotmat = (date) => {
  const dateSegment = date.split("T").shift().split("-");
  return `Joined ${dateSegment[2]} ${months[dateSegment[1] - 1]} ${
    dateSegment[0]
  }`;
};
