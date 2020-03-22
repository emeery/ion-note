var express = require('express');
const bodyparser = require('body-parser')
require('./src/config/db')
var app = express()

const noteRouter = require('./src/controller/note')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


app.use('/note', noteRouter)
app.listen(8090, function () {
  console.log(' port 8090!');
});