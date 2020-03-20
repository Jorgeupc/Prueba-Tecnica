const express = require('express');
const hours = require('../Componentes/hours/network');

const routes = function(server){
    server.use('/hours', hours)
};

module.exports = routes;