const request = require('request')
const API_KEY = // GET API KEY HERE
const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=${API_KEY}`

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
  })
}

module.exports = {
  getPlaces: getPlaces
};
