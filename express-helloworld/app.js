var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello V2!\n');
});
app.get('/mars', function (req, res) {
  res.send('Hello Mar!\n');
});
app.get('/earth', function (req, res) {
  res.send('Hello Earth!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

