const Employee = require("../functions/employee.js");
const Engineer = require("../functions/engineer.js");

it("Can set GitHub account via constructor argument", () => {
  const employee = new Engineer(
    "Andrew",
    7456,
    "andrew@gmail.com",
    "andrew123"
  );
  expect(employee.github).toBe("andrew123");
});

it("getRole() should return 'Engineer'", () => {
  const employee = new Engineer(
    "Andrew",
    7456,
    "andrew@gmail.com",
    "andrew123"
  );

  expect(employee.getRole()).toBe("Engineer");
});

it("Can get Github username via getGithub()", () => {
  const employee = new Engineer(
    "Andrew",
    7456,
    "andrew@gmail.com",
    "andrew123"
  );

  expect(employee.getGithub()).toBe("andrew123");
});
