const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    document: String,
    fullName: String,
    initialDate: String,
    endDate: String,
    startTime: String,
    endTime: String,
    startTimeExtra: String,
    endTimeExtra: String,
    description: String,
});

const model = mongoose.model('hour', mySchema);

module.exports = model;