const express = require('express');
const lightAPI = require('./light');

const lightRouter = express.Router();

lightRouter.get('/', lightAPI.getLight);

lightRouter.post('/', lightAPI.saveLight);

module.exports = lightRouter;
