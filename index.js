const inquirer = require("inquirer");
const view = require('./lib/view_db.js');
const add = require('./lib/add_db.js');
const update = require('./lib/update_db.js');
const sort = require('./lib/sort_db.js');
const delete_db = require('./lib/delete_db.js');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

let continueQs = true;
async function runAgain() {
  if (continueQs){
    questions();
  }
}

async function questions() {
  return inquirer
    .prompt([
      {
        name: 'choice',
        type: 'list',
        loop: true,
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', "Update an employee's role", "Update an employee's manager", 'Delete a department', 'Delete a role', 'Delete an employee', 'End Program'],
        default: 'View all departments',
      },
    ])
    .then(async function(data) {
      if (data.choice === 'View all departments') {
        // imported view from another file that has all the queries
        await view.departments();
        runAgain();

      } else if (data.choice === 'View all roles') {
        await view.roles();
        runAgain();

      } else if (data.choice === 'View all employees') {
        await view.employees();
        runAgain();

      } else if (data.choice === 'Add a department') {
        await add.department();
        runAgain();

      } else if (data.choice === 'Add a role') {
        await add.role();
        runAgain();

      } else if (data.choice === 'Add an employee') {
        await add.employee();
        runAgain();

      } else if (data.choice === "Update an employee's role") {
        await update.employee_role();
        runAgain();

      } else if (data.choice === "Update an employee's manager") {
        await update.employee_manager();
        runAgain();

      } else if (data.choice === "View employees by manager") {
        await sort.by_manager();
        runAgain();

      } else if (data.choice === "View employees by department") {
        await sort.by_department();
        runAgain();

      } else if (data.choice === "Delete a department") {
        await delete_db.department();
        runAgain();

      } else if (data.choice === "Delete a role") {
        await delete_db.role();
        runAgain();

      } else if (data.choice === "Delete an employee") {
        await delete_db.employee();
        runAgain();

      } else {
        continueQs = false;
        return console.log('Thanks for using The Dream Team CMS!');
      }
    })
    // .then(runAgain())
    .catch((err) => console.log(err))
};

questions();