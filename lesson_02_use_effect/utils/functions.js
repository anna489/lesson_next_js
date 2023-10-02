import moment from "moment";
export const formatDate = (dateStr) => {
  const dt = moment(dateStr).format("LL");
  console.log(dt);
  return dt;
};
