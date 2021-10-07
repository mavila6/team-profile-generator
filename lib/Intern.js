const Employee = require("./Employee")
class Intern extends Employee {
    // constructor function
    constructor(name, id, email, school) 
    {
        super(name, id, email);
        this.school = school;
    }
    // returns the school of the intern
    getSchool() {
        return this.school;
    }
    // returns the role of intern
    getRole() {
        return 'Intern';
    }
    
}

module.exports = Intern;