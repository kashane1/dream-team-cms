const inquirer = require("inquirer");
const mysql = require('mysql2');

// start of the add a new department function
async function add_department() {
  return inquirer
    .prompt([
      {
        name: 'department',
        type: 'input',
        message: 'What is the name of the new department?',
      },
    ])
    .then((data) => {
      // creates a connectiong to the db to only be called right before we query it
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // add a new department as a row to the 'departments' table
      db.query(`INSERT INTO departments (name) VALUES ('${data.department}');`, function (err, results) {});
      
      //adding this select query to check if it gets added right away
      db.query('SELECT * FROM departments', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

// start of the add a new role function
async function add_role() {
  return inquirer
    .prompt([
      {
        name: 'role',
        type: 'input',
        message: 'What is the name of the new role?',
      },
      {
        name: 'role_salary',
        type: 'input',
        message: 'What is the salary of the new role? (numbers only, no commas)',
      },
      {
        name: 'role_department',
        type: 'input',
        message: "What is the id numer of the department that the new role belongs to?",
      },
    ])
    .then((data) => {
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // this query will add the new role as a row to the 'roles' table
      db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${data.role}', '${data.role_salary}', '${data.role_department}');`, function (err, results) {
        console.log(err);
        console.log(results);
      });

      // adding and consoling this select query to check if it gets added right away
      db.query('SELECT * FROM roles;', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

// start of the add a new employee function
async function add_employee() {
  return inquirer
    .prompt([
      {
        name: 'employee_fname',
        type: 'input',
        message: 'What is the first name of the new employee?',
      },
      {
        name: 'employee_lname',
        type: 'input',
        message: 'What is the last name of the new employee?',
      },
      {
        name: 'employee_role',
        type: 'input',
        message: 'What is the id of the role of the new employee?',
      },
    ])
    .then((data) => {
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( () => db.end());

      // this will add a new employee to the 'employees' table
      db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${data.employee_fname}', '${data.employee_lname}', '${data.employee_role}', 'NULL');`, function (err, results) {
        // console.log(results);
      });

      // consoling this select query to check if it gets added right away
      db.query('SELECT * FROM employees;', function (err, results) {
        console.log('');
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

module.exports = {
  add_department,
  add_role, 
  add_employee
}