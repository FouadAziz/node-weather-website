const request = require("request");

const geocode = function (address, callback) {
  const url = `http://api.positionstack.com/v1/forward?access_key=4183c0b8610bc31990eaf7d3703cb84d&query=${address}&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("check internet connection", undefined);
    } else if (body.data === undefined) {
      callback("no matches were found", undefined);
    } else {
      callback(undefined, body.data[0]);
    }
  });
};

module.exports = geocode;
