const inquirer = require("inquirer");
const fs = require("fs");

let employee = [];
newEmployee();
//connect to objects.js (export and require)

//prompt for the questions
//Create a function to write an html file.
//for prompt, have a raw list of role types. Employee, Manager, Engineer and Intern

//IDEA
//Save prompt as a function
//in the .then, run a2nd prompt, if they answer yes, then go back to the first promot
function newEmployee() {
  inquirer
    .prompt([
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
    ])
    .then((data) => {
      createNewObj(data);
    })
    .then(() => {
      inquirer
        .prompt([
          {
            type: "confirm",
            message: "Would you like to add another emloyee?",
            choices: ["Y", "N"],
          },
        ])
        .then(() => {
          if (confirmed) {
            newEmployee();
          } else {
            return;
          }
        });
    });
}

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

//From the prompt a new iteration of employee will be created
//Uses the data called from the other page
//if(data.role === Employee){const teamMember1 = new Employee(data.name, data.id, data.email)}

class Manager extends Employee {
  constructor(name, id, email, officeNo) {
    super(name, id, email);
    this.officeNumber = officeNo;
  }

  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

function createNewObj(data) {
  if (data.employType === "Employee") {
    employee.push(new Employee(data.name, data.id, data.email));
    console.log(employee);
  } else {
    return;
  }
}
