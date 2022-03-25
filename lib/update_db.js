const inquirer = require("inquirer");
const mysql = require('mysql2');

// start of the function to update an employee's role
async function employee_role() {
  inquirer
  .prompt([
    {
      name: 'employee_id',
      type: 'input',
      message: 'Enter the id number for the employee whose role you want to update:',
    },
    {
      name: 'new_role',
      type: 'input',
      message: 'What is their new role?',
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
    
    // first need to get the id of the new role before we can attach it to the employee
    let role_number = 0;
    db.query(`SELECT id FROM roles WHERE title = '${data.new_role}';`, function (err, results) {
      role_number = results;
      // console.log(results);
    });      

    // then we update the employee
    db.query(`UPDATE employee SET role_id = ${role_number} WHERE id = ${employee_id};`, function (err, results) {
      console.log(results);
    });
    return 
  })
};

// start of the function to update an employee's manager
async function employee_manager() {
  inquirer
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
    db.query(`UPDATE employee SET manager_id = ${new_manager} WHERE id = ${employee_id};`, function (err, results) {
      console.log(results);
    });
    return 
  })
};

module.exports = {
  employee_role,
  employee_manager
}