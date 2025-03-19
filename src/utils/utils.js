function formatDate(date) {
  return date.toISOString().split("T")[0]; // Extracts only the YYYY-MM-DD part
}

export { formatDate };
