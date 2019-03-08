var sqlite3 = require('sqlite3').verbose();
// open the database
let db = new sqlite3.Database('./sqlite.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the sqlite database.');
  });


  module.exports = {"db":db}