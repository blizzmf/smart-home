const fs = require('fs');

const repository = module.exports;

repository.getJson = (filePath, username) => {
  if(!fs.existsSync(`${filePath}-${username}.json`)) {
    username = 'default';
  }
  let file = fs.readFileSync(`${filePath}-${username}.json`, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
      return;
    } else {
      file = JSON.parse(data);
      return file;
    }
  });
  return JSON.parse(file);
}

repository.saveJson = (body, filePath, username) => {
  json = JSON.stringify(body);
  console.log(`${filePath}-${username}.json`);
  fs.writeFile(`${filePath}-${username}.json`, json, 'utf8', err => {
    if (err) {
      console.log(err);
      return;
    }
    return;
  });
}