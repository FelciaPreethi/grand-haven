import { differenceInDays, parse, format } from "date-fns";

function formatDateInWords(dateString) {
  return format(new Date(dateString), "EEE - MMM dd, yyyy");
}

function formatDate(date) {
  if (!date) {
    date = new Date();
  }
  return date.toISOString().split("T")[0]; // Extracts only the YYYY-MM-DD part
}

function getDaysBetween(date1, date2) {
  const format = "yyyy-mm-dd";

  const parsedDate1 = parse(date1, format, new Date());
  const parsedDate2 = parse(date2, format, new Date());

  return Math.abs(differenceInDays(parsedDate1, parsedDate2));
}

export { formatDate, formatDateInWords, getDaysBetween };
