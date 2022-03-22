const inquirer = require("inquirer");
const mysql = require('mysql2');

// from the readme: You might want to use a separate file that contains functions for performing specific 
// SQL queries you'll need to use. A constructor function or class could be helpful for organizing these.

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

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
            
        } else if (answers.confirm_answer) {
            
        } else {
          // the user changed their mind
          // run the function to ask this question again
        } 
      });