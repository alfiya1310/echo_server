const request = require('request');

request.post({
  url: 'http://localhost:8080/add',
  json: true,
  body: 1
}, (err, body, res) => {
  if(!err && res.statusCode === 200) {
    return result;
  }
});