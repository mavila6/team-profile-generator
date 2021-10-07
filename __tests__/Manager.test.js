const { expect } = require("@jest/globals");
const Manager = require('../lib/Manager');

test('create manager object', () => 
{
    const manager = new Manager("Boss Man", 535983, "bossman983@gmail.com", 11021);
    expect(typeof manager).toBe("object");

    // expects an integer for id/officenumber and string for the email & name
    expect(manager.email)===(expect.any(String));
    expect(manager.officeNumber)===(expect.any(Number));
    expect(manager.name)===(expect.any(String));
    expect(manager.id)===(expect.any(Number));
});

// runs test for manager name
test("Manager Name" , () => {
    const manager = new Manager("Marco", 12345, "tavila6@gmail.com", 12345);
   //excpects a string for name
    expect(manager.getName())===(expect.any(String));
})

// runs test for id
test("Manager ID" , () => {
    const manager = new Manager("Marco", 12345, "tavila6@gmail.com", 12345);
    // expects string 
    expect(manager.getId())===(expect.any(Number));
})

// test for email
test("Manager Email" , () => {
    const manager = new Manager("Marco", 12345, "tavila6@gmail.com", 12345);
    // expects string for email
    expect(manager.getEmail())===(expect.any(String));
})

// test for office number
test("Office Number" , () => {
    const manager = new Manager("Marco", 12345, "tavila6@gmail.com", 12345);
    // expects an integer
    expect(manager.getOfficeNumber())===(expect.any(Number));
})

// runs test for role
test("Employee Role", () => {
    const manager = new Manager ("Marco", 12345, "tavila6@gmail.com", 12345);
    // expects string for role
    expect(manager.getRole())===(expect.any(String));
})


