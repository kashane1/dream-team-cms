const inquirer = require("inquirer");
const view = require('./lib/view_db.js');
const add = require('./lib/add_db.js');
const update = require('./lib/update_db.js');
const sort = require('./lib/sort_db.js');
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
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', "Update an employee's role", "Update an employee's manager", 'End Program'],
        default: 'View all departments',
      },
    ])
    .then(async function(data) {
      if (data.choice === 'View all departments') {
        // imported view from another file that has all the queries
        await view.all_departments();
        runAgain();

      } else if (data.choice === 'View all roles') {
        await view.all_roles();
        runAgain();

      } else if (data.choice === 'View all employees') {
        await view.all_employees();
        runAgain();

      } else if (data.choice === 'Add a department') {
        await add.add_department();
        runAgain();

      } else if (data.choice === 'Add a role') {
        await add.add_role();
        runAgain();

      } else if (data.choice === 'Add an employee') {
        await add.add_employee();
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

      } else {
        continueQs = false;
        return console.log('Thanks for using The Dream Team CMS!');
      }
    })
    // .then(runAgain())
    .catch((err) => console.log(err))
};

questions();