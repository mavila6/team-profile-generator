const Inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { writeFile, copyFile } = require('./src/generate-site');
const template = require('./src/page-template');

const team = [];


const EmployeeInfo = () => {
    Inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of Employee!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is the Employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the EMployee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of Employee!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the Employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }

    ]).then(answer => {
        if (answer.role === 'Manager') {
            Inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the Office Number'
                }
            ]).then(data => {
                const newMange = new Manager(answer.name, answer.Id, answer.email, data.officeNumber);
                team.push(newMange);
                addEmployee();
            })

        }
        else if (answer.role === 'Engineer') {
            Inquirer.prompt([
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'What is their GitHub?'

                }
            ]).then(data => {
                const newEngin = new Engineer(answer.name, answer.Id, answer.email, data.gitHub);
                team.push(newEngin);
                addEmployee();
            })
        }
        else if (answer.role === 'Intern') {
            Inquirer.prompt([
                {
                    type: 'input',
                    name: 'School',
                    message: 'What school do they attend?'
                }
            ]).then(data => {
                const newIntern = new Intern(answer.name, answer.Id, answer.email, data.School);
                team.push(newIntern);
                addEmployee();
            })
        }
    })
}

const addEmployee = () => {
    console.log(team);
    Inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add another Employee?',
            default: false
        }
    ]).then(info => {
        if (info.confirmEmployee) {
            EmployeeInfo(team);
        } else {
            let wF = template(team);
            writeFile(wF);
            console.log(writeFile(wF));
            copyFile();
        }
    })
}

EmployeeInfo();