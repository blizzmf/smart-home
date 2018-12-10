const path = require('path');
const repository = require('../../database/repository');

const api = module.exports;

api.getHeating = (req, res) => res.send(repository.getJson(path.join(__dirname, '../../user', 'heating'), req.cookies.username));

api.saveHeating = (req, res) => {
  repository.saveJson(req.body.content, path.join(__dirname, '../../user', req.body.tab), req.cookies.username);
  res.sendStatus(200);
}