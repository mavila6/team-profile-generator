const Employee = require("./Employee");
class Engineer extends Employee
{
    // constructor function
    constructor(name, id, email, github) 
    {
        super(name, id, email);
        this.github;
        this.role = "Engineer"
    }
    // returns the name
    getName() {
        return this.name;
    }
    // returns the id
    getId() {
        return this.id;
    }
    // returns the email
    getEmail() {
        return this.email;
    }
    // returns the github
    getGithub() {
        return this.github;
    }
    // returns the role
    getRole() {
        return this.role;
    }
}
// exports engineer data
module.exports = Engineer