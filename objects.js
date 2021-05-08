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

function createNewObj(employ, data) {
  if (employ === "Employee") {
    new Employee(data.name, data.id, data.email);
  }
}
