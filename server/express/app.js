var express = require('express');
var cors = require('cors');
var app = express();

const port = process.env.port || 3001;

app.use(cors());

app.get('/api', function (req, res) {
  res.json({
    message: 'Hello2',
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
