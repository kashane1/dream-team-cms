const inquirer = require("inquirer");
const view = require('./lib/view_db.js');
const add = require('./lib/add_db.js');
const update = require('./lib/update_db.js')


// from the readme: You might want to use a separate file that contains functions for performing specific 
// SQL queries you'll need to use. A constructor function or class could be helpful for organizing these.

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// writing it out straight for now, but will need to make it asyncronus to call multiple times
let continueQs = true;

async function init(){
  if (continueQs){
    questions();
  }
}


function questions() {
  inquirer
    .prompt([
      {
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'End Program', new inquirer.Separator()],
        default: 'view all departments',
      },
    ])
    .then((answer) => {
      if (answer.choice === 'view all departments') {
        // imported view from another file that has all the queries
        view.all_departments();
        
      } else if (answer.choice === 'view all roles') {
        view.all_roles();

      } else if (answer.choice === 'view all employees') {
        view.all_employees();

      } else if (answer.choice === 'add a department') {
        add.add_department();

      } else if (answer.choice === 'add a role') {
        add.add_role();

      } else if (answer.choice === 'add an employee') {
        add.add_employee();

      } else if (answer.choice === 'update an employee role') {
        update.update_employee();

      } else {
        continueQs = false;
        console.log('Thanks for running the Dream Team CMS!');
      }
    })
    .catch((err) => console.log(err))
};

module.exports = init();