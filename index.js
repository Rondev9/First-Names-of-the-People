let getFirstNames = require("../utilities/utils/index.js");
let peopleList = require("../country/state/city/index.js");
const getPeopleInCity = function (list) {
  return getFirstNames(list);
};
module.exports = getPeopleInCity;
