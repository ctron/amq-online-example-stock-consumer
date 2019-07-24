var express = require('express');
var app = express();
var path = require('path');

const uri = process.env.AMQP_URI
const username = process.env.AMQP_USERNAME
const password = process.env.AMQP_PASSWORD

app.get('/con.info', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ uri: uri, username: username, password: password, options: ["binary", "AMQPWSB10", "amqp"] }));
})

app.use(express.static('public'));
app.use(express.static('node_modules'))

app.listen(8080);
