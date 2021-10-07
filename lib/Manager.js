const Employee = require("./Employee");

class Manager extends Employee 
{
    // constructor function
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber) 
        this.officeNumber = officeNumber;
    }
    // returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    // returns role as manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;