const moment = require("moment");
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  },
  getDiff: ({ quantity, currentPrice, total }) =>
    currentPrice * quantity - total,
  getDiffAll: (wallet) =>
    wallet.reduce(
      (t, { quantity, currentPrice, total }) =>
        t + currentPrice * quantity - total,
      0
    ),
};
