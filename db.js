const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  port: 3306,
  database: "productsdb",
});

module.exports = conn;