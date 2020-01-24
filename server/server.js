const express = require('express');
let app = express();
let port = 3000;
let db = require('../db');

app.use(express.json());

app.use(express.static('./public'));

app.post('/items', (req, res) => {

  db.save(req.body);

  res.status(200).send('success');

})

app.get('/items', (req, res) => {


});


app.listen(port, () => {
  console.log('app listening on port 3000');
})