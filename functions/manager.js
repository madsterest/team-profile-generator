const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNo) {
    super(name, id, email);
    this.officeNumber = officeNo;
  }

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
