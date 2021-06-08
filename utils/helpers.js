module.exports = {
  getObjectProperty: (obj, prop) => {
    return obj[prop];
  },
  getFirstLetterFromName: (obj, prop) => {
      return obj[prop][0];
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // The custom helper 'format_date' takes in a timestamp
  format_date: (date) => {
    return date.toLocaleDateString();
  },
};
