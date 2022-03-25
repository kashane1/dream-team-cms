const inquirer = require("inquirer");
const mysql = require('mysql2');

// start of the delete a department function
async function department() {
  return inquirer
    .prompt([
      {
        name: 'department_id',
        type: 'input',
        message: 'What is the id of the department you want to delete?',
      },
    ])
    .then((data) => {
      // creates a connectiong to the db to only be called right before we query it
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // add a new department as a row to the 'departments' table
      db.query(`DELETE FROM departments WHERE id = '${data.department_id}';`, function (err, results) {});
      
      //adding this select query to check if it gets added right away
      db.query('SELECT * FROM departments', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

// start of the delete a role function
async function role() {
  return inquirer
    .prompt([
      {
        name: 'role_id',
        type: 'input',
        message: 'What is the id of the role you want to delete?',
      },
    ])
    .then((data) => {
      // creates a connectiong to the db to only be called right before we query it
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // add a new department as a row to the 'departments' table
      db.query(`DELETE FROM roles WHERE id = '${data.role_id}';`, function (err, results) {});
      
      //adding this select query to check if it gets added right away
      db.query('SELECT * FROM roles', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

// start of the delete a employee function
async function employee() {
  return inquirer
    .prompt([
      {
        name: 'employee_id',
        type: 'input',
        message: 'What is the id of the employee you want to delete?',
      },
    ])
    .then((data) => {
      // creates a connectiong to the db to only be called right before we query it
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // add a new department as a row to the 'departments' table
      db.query(`DELETE FROM employees WHERE id = '${data.employee_id}';`, function (err, results) {});
      
      //adding this select query to check if it gets added right away
      db.query('SELECT * FROM employees', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

module.exports = {
  department,
  role,
  employee
}