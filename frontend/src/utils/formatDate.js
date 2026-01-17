export const formatDate = (dateString) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatDateOnly = (dateString) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
