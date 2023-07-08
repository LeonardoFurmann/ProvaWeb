const mongoose = require('mongoose');
const URL = 'mongodb://0.0.0.0:27017/catalogo';
const db = mongoose.connect(URL);
const con = mongoose.connection;

con.on('open', function () {
  console.log('Conectado ao MongoDB!');
});

module.exports = db;