const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

//req.query.user = valor agregador al url '/message?user=jorge'
//req.body.user = valor en body '{ "user": "jorge" }'
//req.params.id = valor por url '/message/123'

router.post("/", function(req, res) {
  controller
    .postHours(req.body)
    .then(result => {
      response.success(req, res, "Agregado correctamente", 200);
    })
    .catch(err => {
      response.error(req, res, "Internal error", 500, err);
    });
});

module.exports = router;