import { padStart } from "./padding";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Nov', 'Dec'];

/**
 * @name getDateFormat formats the simple date string to required date format
 * @param {string} dateString date string which needs to be converted
 * @param {string} format string which represents the format of date
 */
export const getDateFormat = (dateString, format) => {
  const dateObj = new Date(dateString);
  const fullYear = dateObj.getFullYear();
  const givenMonth = dateObj.getMonth();
  const givenDate = dateObj.getDate();

  const formattedDate = {};

  const year = (format.match(/y+/ig) || [])[0];
  const month = (format.match(/m+/ig) || [])[0];
  const date = (format.match(/d+/ig) || [])[0];

  // set year replacer
  if (year) {
    if (year.length === 4) {
      formattedDate[year] = fullYear.toString();
    } else {
      formattedDate[year] = dateObj.toString().substring(4 - Math.max(year.length, 2))
    }
  }

  // set month replacer
  if (month) {
    if (month.length === 3) {
      formattedDate[month] = months[givenMonth];
    } else {
      formattedDate[month] = padStart(givenMonth + 1, '0', month.length);
    }
  }

  // set date replacer
  if (date) {
    formattedDate[date] = padStart(givenDate, '0', date.length);
  }

  return format
    .replace(year, formattedDate[year])
    .replace(month, formattedDate[month])
    .replace(date, formattedDate[date]);
}

export const calculateDiff = (startDate, endDate = new Date()) => {
  const startDate_dateFormat = new Date(startDate);
  const endDate_dateFormat = new Date(endDate);

  const experience = (
    (endDate_dateFormat - startDate_dateFormat) / (1000 * 60 * 60 * 24 * 30 * 12)
  ).toFixed(1);

  return `${experience} year${+experience <= 1 ? '' : 's'}`;
}
