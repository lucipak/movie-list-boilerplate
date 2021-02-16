var mysql = require("mysql");

const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "movies",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("SUCCESS!");
  }
});

module.exports = connection;
