const inquirer = require("inquirer");
const mysql = require('mysql2');

// start of the function to update an employee's role
async function employee_role() {
  return inquirer
  .prompt([
    {
      name: 'employee_id',
      type: 'input',
      message: 'Enter the id number for the employee whose role you want to update:',
    },
    {
      name: 'new_role',
      type: 'input',
      message: 'What is the id of the new role?',
    }
  ])
  .then((data) => {
    const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
    db.promise().query("SELECT 1")
      .then( ([rows,fields]) => {
        console.log('');
      })
      .catch(console.log)
      .then( () => db.end());  

    // update the employee role
    db.query(`UPDATE employees SET role_id = ${data.new_role} WHERE id = ${data.employee_id};`, function (err, results) {
      // console.log(results);
    });

    // doing this query to instantly check that the changes were made
    db.query('SELECT * FROM employees', function (err, results) {
      console.log('');
      console.table(results);
    });
  })
};

// start of the function to update an employee's manager
async function employee_manager() {
  return inquirer
  .prompt([
    {
      name: 'employee_id',
      type: 'input',
      message: 'Enter the id number for the employee who needs their manager updated:',
    },
    {
      name: 'new_manager',
      type: 'input',
      message: 'Enter the id number for the new manager:',
    }
  ])
  .then((data) => {
    const db = mysql.createConnection({host: 'localhost', user: 'root', password: 'rootroot', database: 'company_db'});
    db.promise().query("SELECT 1")
      .then( ([rows,fields]) => {
        console.log('');
      })
      .catch(console.log)
      .then( () => db.end());  
    
    // these query takes the direct inputs and updates the employee's manager
    db.query(`UPDATE employees SET manager_id = ${data.new_manager} WHERE id = ${data.employee_id};`, function (err, results) {
      // console.log(results);
    });

    // doing this query to instantly check that the changes were made
    db.query('SELECT * FROM employees', function (err, results) {
      console.log('');
      console.table(results);
    });
  })
};

module.exports = {
  employee_role,
  employee_manager
}