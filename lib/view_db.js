const mysql = require('mysql2');

// start of function to view all departments
async function all_departments() {
  // i need to create a connecttion to the db and make it a promise for query to go back as a promise 
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( () => db.end());

  db.query('SELECT * FROM departments', function (err, results) {
    console.log('');
    return console.table(results);
  });
}

// start of function to view all roles
async function all_roles() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( () => db.end());

  db.query('SELECT * FROM roles', function (err, results) {
    console.log('');
    return console.table(results);
  });
}

// start of function to view all employees
async function all_employees() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( () => db.end());

  db.query('SELECT * FROM employees', function (err, results) {
    console.log('');
    return console.table(results);
  });
}

module.exports = {
  all_departments,
  all_roles,
  all_employees
}