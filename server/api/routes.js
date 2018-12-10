const express = require('express');
const security = require('./security');
const light = require('./light');
const heating = require('./heating');

const apiRoutes = express.Router();

const API_ROUTES = {
  '/security': security,
  '/light': light,
  '/heating': heating,

};

Object.keys(API_ROUTES).forEach((api) => { apiRoutes.use(api, API_ROUTES[api]); });

apiRoutes.getApiUrls = () => Object.keys(API_ROUTES);

module.exports = apiRoutes;
