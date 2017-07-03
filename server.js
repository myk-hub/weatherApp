const express = require('express')
const app     = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
})


app.listen(8080, function () {
  console.log('Example app list on port 8080');
})
