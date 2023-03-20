const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function formatDate(rawDate: Date, yearOnly: boolean = false) {
  const formattedDate = new Date(rawDate);

  if (yearOnly) return formattedDate.getFullYear();

  return formattedDate.toLocaleDateString("en-AU", options);
}
