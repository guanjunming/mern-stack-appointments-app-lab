export const formatDateToLocalString = (date) => {
  if (!date) {
    return "";
  }
  const formattedDate = new Date(date).toLocaleString();
  return formattedDate;
};

export const formatToLocalDatetime = (utcDate) => {
  if (!utcDate) {
    return "";
  }

  const date = new Date(utcDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
