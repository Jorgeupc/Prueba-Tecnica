const express = require('express');
const bodyParse = require('body-parser');
const router = require('./network/routes');
const cors = require('cors');
const db = require('./db');

db('mongodb+srv://Dev:admin1234@clustepov-ky1mc.mongodb.net/test?retryWrites=true&w=majority');
var app = express();
app.use(cors());
app.use(bodyParse.json());
router(app);

app.listen(3000);
