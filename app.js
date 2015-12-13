var express = require("express");
var morgan = require('morgan')

var app = express();

app.use(morgan('combined'))
app.use(express.static('static'));
app.listen(1337);
console.log("Running demo on localhost:1337")
