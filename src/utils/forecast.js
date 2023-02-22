const request = require("request");
const forecast = function (long, lat, callback) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=462f478741205ac60bda9024e328a23d`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("check your internet connection", undefined);
    } else if (body.error) {
      callback("coordinates error", undefined);
    } else {
      callback(undefined, body.main);
    }
  });
};
module.exports = forecast;
