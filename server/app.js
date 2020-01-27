const express = require('express');
let app = express();
let db = require('../db');


app.use(express.json());
app.use(express.static('./public'));


app.get('/:id', (req, res) => {

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