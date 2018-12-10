const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('../api/routes');
const credential = path.join(__dirname, '../user', 'credential.json');
const cookieParser = require('cookie-parser')

const configureServer = (app) => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.post('/login', (req, res) => {
    const body = req.body;
    fs.readFile(credential, 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        const cred = JSON.parse(data);
        const hasUser = cred.users.filter(user => user.username == body.username && user.password == body.password);
        if (hasUser[0] && hasUser[0].username) {
          res.cookie('username', body.username);
        } else {
          res.clearCookie("username");
        }
        return res.redirect('/');
      }
    });
  });

  app.post('/logout', (req, res) => {
    res.clearCookie("username");
    res.redirect('/');
  });

  app.post('/registration', (req, res) => {
    const body = req.body;
    fs.readFile(credential, 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
        return;
      } else {
        const cred = JSON.parse(data);
        cred.users.push(body);
        json = JSON.stringify(cred);
        fs.writeFile(credential, json, 'utf8', err => {
          if (err) {
            console.log(err);
            return;
          }
        });
        res.cookie('username', body.username);
        return res.redirect('/');
      }
    });
  });

  app.use('/api', apiRoutes);
};
module.exports = configureServer;
