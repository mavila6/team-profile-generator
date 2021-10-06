const { expect } = require("@jest/globals");
const Employee = require('../lib/Employee');

test('creates employee object', () => 
{
    const employee = new Employee("Marco", 12345, "tavila6@gmail.com");
    expect(typeof employee).toBe("object");

    // name & email expect strings and id expects an integer
    expect(employee.name)===(expect.any(String));
    expect(employee.id)===(expect.any(Number));
    expect(employee.email)===(expect.any(String));
});
//  tests the name for string
test("Employee Name", () => {
    const employee = new Employee("Marco", 12345, "tavila6@gmail.com");
    expect(employee.getName()).toEqual(expect.any(String));
});
// tests the email for string
test("Employee Email", () => {
    const employee = new Employee("Marco", 12345, "tavila6@gmail.com")
    expect(employee.getEmail())===(expect.any(String));
});
// tests the id for an integer
test("Employee ID", () => {
    const employee = new Employee("Marco", 12345, "tavila6@gmail.com");
    expect(employee.getId())===(expect.any(Number));
});
// test for role as a string
test("Employee Role", () => {
    const employee = new Employee("Marco", 131822, "tavila6@gmail.com")
    expect(employee.getRole())===(expect.any(String))
})