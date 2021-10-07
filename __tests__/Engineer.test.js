const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('New Engineer', () => {
    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com", "mavila6@github.io");

    expect(typeof engineer).toBe("object")
    // expects and integer for the engineer id and strings for the name, email, & GitHub
    expect(engineer.email)===(expect.any(String));
    expect(engineer.github)===(expect.any(String));
    expect(engineer.name)===(expect.any(String));
    expect(engineer.id)===(expect.any(Number));
    

});
// runs test for the employee role
test("Engineer Role", () => {
    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com")
    // expects a string for the role
    expect(engineer.getRole())===(expect.any(String))
})
// runs test for the engineer id
test("Engineer ID", () => {
    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com");
    // expects an integer for the id
    expect(engineer.getId())===(expect.any(Number));
});
// runs test for the engineer's name
test("Engineer Name", () => {
    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com");
    // expects a string for the name
    expect(engineer.getName())===(expect.any(String));
});
// runs test for email value
test("Engineer Email", () => {
    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com")
    // expects string for the email
    expect(engineer.getEmail())===(expect.any(String));
});
// runs test for github username
test("Engineer GitHub", () => {

    const engineer = new Engineer("Marco", 12345, "tavila6@gmail.com")
    // expects a string for the GitHub username
    expect(engineer.getGithub())===(expect.any(String))
});

