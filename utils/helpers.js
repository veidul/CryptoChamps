const moment = require("moment");
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  },
  getDiff: ({ quantity, currentPrice, total }) =>
    parseFloat(currentPrice * quantity - total).toFixed(2),
  getDiffAll: (wallet) =>
    parseFloat(wallet.reduce(
      (t, { quantity, currentPrice, total }) =>
        t + currentPrice * quantity - total,
      0
    )).toFixed(2),
};
