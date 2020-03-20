const store = require("./store");

function postHours(body) {
  return new Promise((resolve, reject) => {
    if (!body) {
      reject("Valores invalidos");
    }
    const response = {
      document: body.document,
      fullName: body.fullName,
      initialDate: body.initialDate,
      endDate: body.endDate,
      startTime: body.startTime,
      endTime: body.endTime,
      startTimeExtra: body.startTimeExtra,
      endTimeExtra: body.endTimeExtra,
      description: body.description,
    }

    resolve(store.add(response));
  })
}

module.exports = {
  postHours
};