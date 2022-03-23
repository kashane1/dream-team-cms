const inquirer = require("inquirer");
const mysql = require('mysql2');
const index = require('../index.js');


//this one still has a lot to add. do add role and add employee first
function update_employee_role() {
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
      name: 'update_role',
      type: 'input',
      message: 'Enter the employee id for the employee you want to update:',
    },
    {
      name: 'update_role',
      type: 'list',
      message: 'What is their new role?',
      choices: ['Salesperson', 'Sales Manager', 'Software Engineer', 'Lead Engineer', 'Lawyer', 'add an employee', 'update an employee role', 'End Program'],
      default: 'Salesperson',
    }
  ])
  .then((data) => {
    // the query will need to take more agruments
    db.query(`INSERT INTO role (name) VALUES ${data.update_role}`, function (err, results) {
      console.log(results);
    });
    return 
  })
};

module.exports = {
  update_employee_role,
}


// this looks good from https://pakstech.com/blog/inquirer-js/
// const questions = [
//   {
//       type: "list",
//       name: "survey.participate",
//       message: "Would you like to participate in an anonymous survey?",
//       choices: ["yes", "no"]
//   },
//   {
//       type: "list",
//       name: "survey.happiness",
//       message: "How happy were you with the questionnaire?",
//       choices: ["Very happy", "Quite happy", "Neutral", "Not quite happy", "Unhappy"],
//       when(answers) {
//           return answers.survey.participate === "yes"
//       }
//   },
//   {
//       type: "input",
//       name: "survey.feedback",
//       message: "Please give us open feedback (optional)",
//       when(answers) {
//           return answers.survey.participate === "yes"
//       }
//   }
// ]
// The result would then look like this:

// {
// "survey": {
//   "participate": "yes",
//   "happiness": "Quite happy",
//   "feedback": "The form could've been longer"
// }
// }