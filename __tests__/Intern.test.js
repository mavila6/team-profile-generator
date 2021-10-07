const { expect } = require("@jest/globals");
const Intern = require('../lib/Intern');

test('Intern Object', () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");

     // expects and integer for the intern id and strings for the name, email, & school
    expect(intern.email)===(expect.any(String));
    expect(intern.school)===(expect.any(String));
    expect(intern.name)===(expect.any(String));
    expect(intern.id)===(expect.any(Number));
    
});

// runs test for the interns school
test("Intern School", () => 
{
    const school = "University of Arizona"
    const intern = new Intern("Marco", 12345, "tavila6@gmail.com", school);
    expect(intern.getSchool())===(school);
})

// runs test for the employee role
test("add name and getRole method will return an intern's role", () => 
{
    const role = "Intern";
    const intern = new Intern("Marco", 12345,"tavila6@gmail.com", role)
    expect(intern.getRole()===(role));
})