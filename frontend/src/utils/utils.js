export const formatDate = (date, includeT = true) => {
  if (!date) {
    return "";
  }
  const formattedDate = new Date(date).toISOString().slice(0, 16);

  if (includeT) {
    return formattedDate;
  } else {
    return formattedDate.replace("T", " ");
  }
};
