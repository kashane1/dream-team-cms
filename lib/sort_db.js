const inquirer = require("inquirer");
const mysql = require('mysql2');

// start of the function to view employees by manager
async function by_manager() {
  return inquirer
  .prompt([
    {
      name: 'manager_id',
      type: 'input',
      message: 'Enter the id number for the manager whose employees you want to view:',
    }
  ])
  .then((data) => {
    // first always create the connect to db
    const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
    db.promise().query("SELECT 1")
      .then( () => db.end());  
    
    // viewing those manager's employees
    db.query(`SELECT * FROM employees WHERE manager_id = ${manager_id}`, function (err, results) {
      console.log('');
      console.table(results);
    }); 
  })
}

// start of the function to view employees by department
async function by_department() {
  return inquirer
  .prompt([
    {
      name: 'department_id',
      type: 'input',
      message: 'What is the name of the department whose employees you want to view?',
    }
  ])
  .then((data) => {
    // first always create the connect to db
    const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
    db.promise().query("SELECT 1")
      .then( () => db.end());  
    
    // viewing those manager's employees
    db.query(`SELECT * FROM employees WHERE manager_id = ${manager_id}`, function (err, results) {
      console.log('');
      console.table(results);
    }); 
  })
}

module.exports = {
  by_manager
}