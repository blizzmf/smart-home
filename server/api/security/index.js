const express = require('express');
const securityAPI = require('./security');

const securityRouter = express.Router();

securityRouter.get('/', securityAPI.getSecurity);

securityRouter.post('/', securityAPI.saveSecurity);

module.exports = securityRouter;
