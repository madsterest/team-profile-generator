const Employee = require("../functions/employee.js");

//   it("Can instantiate the Employee Instance", () => {
//     const employee = new Employee();
//     expect(employee).toBe;
//   });

it("Can set name via constructor arguments", () => {
  const employee = new Employee("Mary");

  expect(employee.name).toBe("Mary");
});

it("Can set id via constructor argument", () => {
  const employee = new Employee("Mary", 1033);

  expect(employee.id).toBe(1033);
});

it("Can set email via constructor argument", () => {
  const employee = new Employee("Mary", 1033, "mary@gmail.com");

  expect(employee.email).toBe("mary@gmail.com");
});

it("Can get name via getName()", () => {
  const employee = new Employee("Mary", 1033, "mary@gmail.com");

  expect(employee.getName()).toBe("Mary");
});
