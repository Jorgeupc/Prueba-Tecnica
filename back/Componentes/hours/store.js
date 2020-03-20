const Model = require("./model");

function postHours(body) {
  const myHours = new Model(body);
  return myHours.save();
}

module.exports = {
  add: postHours
};
