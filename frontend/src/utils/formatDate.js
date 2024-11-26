const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default formatDate;
