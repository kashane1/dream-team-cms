const inquirer = require("inquirer");
const mysql = require('mysql2');

// from the readme: You might want to use a separate file that contains functions for performing specific 
// SQL queries you'll need to use. A constructor function or class could be helpful for organizing these.

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// first have to connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'company_db'
  },
  console.log(`Connected to the company database.`)
);


// writing it out straight for now, but will need to make it asyncronus to call multiple times
inquirer
  .prompt([
    {
      name: 'start',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      default: 'view all departments',
    },
  ])
  .then((answers) => {
    if (answers == 'view all departments') {
      //need to find the db.query lines to return the correct info
      db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
      });
    } else if (answers == 'view all roles') {
      db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
      });
    } else if (answers == 'view all employees') {
      db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
      });
    } else if (answers == 'add a department') {
      // i will need another inquirer here 
      inquirer
        .prompt([
          {
            name: 'add_department',
            type: 'input',
            message: 'What is the name of the new department?',
          },
        ])
        .then((data) => {
          db.query(`INSERT INTO department (name) VALUES ${data}`, function (err, results) {
            console.log(results);
          });
        })
    } else if (answers == 'add a role') {
      // this new inquirer will have 2 layers, picking the role and then what dept does it belong to

    } else if (answers == 'add an employee') {
      // this inquirer will have 3 layers
      
    } else {

    } 
  });