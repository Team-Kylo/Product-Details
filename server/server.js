const express = require('express');
let app = express();
let port = 3000;

app.use(express.json());
app.use(express.static('./public'));

app.listen(port, () => {
  console.log('app listening on port 3000');
})