const mysql = require('mysql2');
const index = require('../index.js')

async function all_departments() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });

  // ive been trying to get this line to work forever
  // i dont understand our index.init() is not a function
  return index.init()
}

function all_roles() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  });
  return
}

function all_employees() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  });
  return
}

module.exports = {
  all_departments,
  all_roles,
  all_employees
}