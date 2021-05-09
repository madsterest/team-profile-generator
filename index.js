const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./render.js");
const Employee = require("./functions/employee.js");
const Manager = require("./functions/manager.js");
const Engineer = require("./functions/engineer.js");
const Intern = require("./functions/intern.js");

let employee = [];

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
            //Once it has stopped running, create a function that renders the info from the employee array.
            let finalRender = render.renderHtml(employee);
            fs.writeFile("index.html", finalRender, (err) => {
              if (err) return console.log(err);
            });
          }
        });
    });
}

//From the prompt a new iteration of employee will be created
//Uses the data called from the other page
//if(data.role === Employee){const teamMember1 = new Employee(data.name, data.id, data.email)}

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
