const express = require('express');
let app = express();
let port = 3000;
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
        console.log('trrruueee');
        targetData = el;
        break;
      }
    }
    res.status(200).json(targetData);
  })


});


app.listen(port, () => {
  console.log('app listening on port 3000');
})