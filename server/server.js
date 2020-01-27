

let app = require('./app.js');
require('dotenv').config();
let port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`listening on port ${port}`);
});