const mysql = require('mysql2');

// start of function to view all departments
async function departments() {
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
async function roles() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( () => db.end());

  db.query('SELECT roles.id, roles.titles, roles.salary, roles.department_id, departments.id, departments.name FROM roles JOIN departments WHERE roles.department_id = departments.id;', function (err, results) {
    console.log(results);
    console.log('');
    return console.table(results);
  });
}

// start of function to view all employees
async function employees() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( () => db.end());

  db.query('SELECT * FROM employees', function (err, results) {
    console.log('');
    return console.table(results);
  });
}

module.exports = {
  departments,
  roles,
  employees
}