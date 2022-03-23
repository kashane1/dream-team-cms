const inquirer = require("inquirer");
const mysql = require('mysql2');
const index = require('../index.js');

async function add_department() {
  const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
  db.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
      console.log('');
    })
    .catch(console.log)
    .then( () => db.end());

  await inquirer
    .prompt([
      {
        name: 'add_department',
        type: 'input',
        message: 'What is the name of the new department?',
      },
    ])
    .then((data) => {
      db.query(`INSERT INTO department (name) VALUES ${data.add_department}`, function (err, results) {
        console.log(results);
      });
      return 
    })
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
    ])
    .then((data) => {
      // the query will need to take more agruments
      db.query(`INSERT INTO role (name) VALUES ${data.add_role}`, function (err, results) {
        console.log(results);
      });
      return 
    })
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
        name: 'add_employee',
        type: 'input',
        message: 'What is the name of the new employee?',
      },
    ])
    .then((data) => {
      // the query will need to take more agruments
      db.query(`INSERT INTO employee (name) VALUES ${data.add_employee}`, function (err, results) {
        console.log(results);
      });
      return 
    })
}

module.exports = {
  add_department,
  add_role, 
  add_employee
}