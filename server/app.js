const express = require('express');

const app = express();
const db = require('../db');


app.use(express.json());
app.use(express.static('./public'));


app.get('/details/:id', (req, res) => {
  db.fetchDocs((err, data) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    const targetId = req.params.id;
    let targetData;

    for (let i = 0; i < data.length; i += 1) {
      // eslint-disable-next-line radix
      if (parseInt(data[i].id) === parseInt(targetId)) {
        targetData = data[i];
        break;
      }
    }
    res.status(200).json(targetData);
  });
});

module.exports = app;
