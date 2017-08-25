const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('bin'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    next();
});
app.listen(3001, () => {
    console.log('app listening on port 3001!');
});

app.get('/', (req, res) => {
    res.redirect('/!#/');

});







