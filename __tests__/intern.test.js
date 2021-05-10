const Employee = require("../lib/employee.js");
const Intern = require("../lib/intern.js");

it("Can set school via constructor argument", () => {
  const employee = new Intern("John", 509, "john@gmail.com", "UTS");

  expect(employee.school).toBe("UTS");
});

it("Can get school via getSchool()", () => {
  const employee = new Intern("John", 509, "john@gmail.com", "UTS");

  expect(employee.getSchool()).toBe("UTS");
});

it("getRole() should return 'Intern'", () => {
  const employee = new Intern("John", 509, "john@gmail.com", "UTS");

  expect(employee.getRole()).toBe("Intern");
});
