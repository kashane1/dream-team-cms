const inquirer = require("inquirer");
const mysql = require('mysql2');
const index = require('../index.js');

async function add_department() {
  await inquirer
    .prompt([
      {
        name: 'add_department',
        type: 'input',
        message: 'What is the name of the new department?',
      },
    ])
    .then((data) => {
      const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
      db.promise().query("SELECT 1")
        .then( ([rows,fields]) => {
          console.log('');
        })
        .catch(console.log)
        .then( () => db.end());

      db.query(`INSERT INTO department (name) VALUES ('${data.add_department}');`, function (err, results) {
        console.log(results);
      });
      //adding this select query to check if it gets added right away
      db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
      });
    })
    .catch((err) => console.log(err))
}

// still need to upadte and add the layers to add role and add employee, additional questions and more params on the query
function add_role() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  inquirer
    .prompt([
      {
        name: 'add_role',
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
        message: "What's the name of the department that the new role belongs to? (CasE SeNsiTive)",
      },
    ])
    .then((data) => {
      // let department_number = 0;
      db.query(`SELECT department_id FROM role WHERE title = ${data.role_department}`, function (err, results) {
        const department_number = results;
        console.log(results);
      });
      db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${data.add_role}', '${data.role_salary}', '${department_number}')`, function (err, results) {
        console.log(results);
      });
      return 
    })
    .catch((err) => console.log(err))
}

// still need to upadte and add the layers to add role and add employee, additional questions and more params on the query
function add_employee() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  inquirer
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
        message: 'What is the role of the new employee?',
      },
    ])
    .then((data) => {
      // let role_number = 0;
      db.query(`SELECT id FROM role WHERE title = ${data.employee_role}`, function (err, results) {
        const role_number = results;
        console.log(results);
      });
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.employee_fname}', '${data.employee_lname}', '${role_number}', 'NULL')`, function (err, results) {
        console.log(results);
      });
      return 
    })
    .catch((err) => console.log(err))
}

module.exports = {
  add_department,
  add_role, 
  add_employee
}