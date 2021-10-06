class Employee {
    // constructor function 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    // returns the name
    getName() {
        return this.name;
    };
    // returns the id
    getId() {
        return this.id;
    };
    // returns the email
    getEmail() {
        return this.email;
    };
    // returns the employee role
    getRole() {
        return this.role;
    }
}
// exports Employee
module.exports = Employee;