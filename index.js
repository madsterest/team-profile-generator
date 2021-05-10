const inquirer = require("inquirer");
const fs = require("fs");
//Importing the functions/classes from other files
const render = require("./render.js");
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

//Created an empty array to store all the object instances once they are created through the inquirer prompts.
let employee = [];

//List of questions for the inquirer.propmt
let questions = [
  {
    type: "input",
    name: "name",
    message: "What is your employees name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is their id no.?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email adress?",
  },
  {
    type: "rawlist",
    name: "employType",
    message: "What type of Employee would you like to add?",
    choices: ["Employee", "Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "office",
    message: "What is their office Number?",
    when: function (answers) {
      return answers.employType === "Manager";
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    when: function (answers) {
      return answers.employType === "Engineer";
    },
  },
  {
    type: "input",
    name: "school",
    message: "What school do you go to?",
    when: function (answers) {
      return answers.employType === "Intern";
    },
  },
];
//Inquirer.propmt that asks questions about the employees. Once the data is obtained, an object is created based on the inputs.
//The 2nd Inquirer.prompt creates the loop. If they answer yes to add another employee, then the newEmployee function is accessed. Otherwise the employee array (which all the objects have been pushed to) will be used in the render functions.
function newEmployee(questions) {
  inquirer
    .prompt(questions)
    .then((data) => {
      createNewObj(data);
    })
    .then(() => {
      inquirer
        .prompt([
          {
            type: "rawlist",
            name: "anotherEmploy",
            message: "Would you like to add another emloyee?",
            choices: ["Yes", "No"],
          },
        ])
        .then((data) => {
          if (data.anotherEmploy === "Yes") {
            newEmployee(questions);
          } else {
            let finalRender = render.renderHtml(employee);
            fs.writeFile("index.html", finalRender, (err) => {
              if (err) return console.log(err);
            });
          }
        });
    })
    .catch((err) => console.log(err));
}

//This function decides which class of object to create. The object is then pushed to the employee array.
function createNewObj(data) {
  if (data.employType === "Employee") {
    employee.push(new Employee(data.name, data.id, data.email));
  } else if (data.employType === "Manager") {
    employee.push(new Manager(data.name, data.id, data.email, data.office));
  } else if (data.employType === "Engineer") {
    employee.push(new Engineer(data.name, data.id, data.email, data.github));
  } else if (data.employType === "Intern") {
    employee.push(new Intern(data.name, data.id, data.email, data.school));
  }
}

newEmployee(questions);
