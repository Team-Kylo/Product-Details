const express = require('express');
let app = express();
let db = require('../db');


app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => {
  console.log('/ req');
  db.fetchDocs((err, data) => {
    if (err) {
      console.log('error fetching docs from / endpoint');
      return;
    }
    res.status(200).json(data);
  });
});


app.get('/:id', (req, res) => {

  console.log('id req');

  db.fetchDocs((err, data) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    var targetId = req.params.id;
    var targetData;

    for (var el of data) {
      if (parseInt(el.id) === parseInt(targetId)) {
        targetData = el;
        break;
      }
    }
    res.status(200).json(targetData);
  })

});


module.exports = app;