const Employee = require("../lib/employee.js");
const Manager = require("../lib/manager.js");

it("Can set office number via constructor argument", () => {
  const employee = new Manager("Samantha", 9668, "sam@gmail.com", 505);
  expect(employee.officeNumber).toBe(505);
});

it("getRole() should return 'Manager", () => {
  const employee = new Manager("Samantha", 9668, "sam@gmail.com", 505);

  expect(employee.getRole()).toBe("Manager");
});

it("Can get office number via getOffice()", () => {
  const employee = new Manager("Samantha", 9668, "sam@gmail.com", 505);

  expect(employee.getOffice()).toBe(505);
});
