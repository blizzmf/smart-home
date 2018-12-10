const express = require('express');
const heatingAPI = require('./heating');

const heatingRouter = express.Router();

heatingRouter.get('/', heatingAPI.getHeating);

heatingRouter.post('/', heatingAPI.saveHeating);

module.exports = heatingRouter;
