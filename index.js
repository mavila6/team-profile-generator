// requires fil system and inquirer prompts
const { prompt } = require("inquirer");
const fs = require("fs");

// require the template
const teamHtml = require("./src/teamHtmlTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// array to be used later to store team info
const teammateArray = [];

const managerQuestions = [
    // Prompts for the manager name
    {
        type: "input",
        message: "Please enter the manager's name (Shift Leader ...etc).",
        name: "name",
        // validatie the input
        validate: (appInput) => {
            //  validation
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log(
                    "Please enter a valid name!"
                );
                return false;
            }
        },
    },

    // Prompt for manager id
    {
        type: "input",
        message: "Please enter the ID number associated with the manager",
        name: "id",
        //  validation
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log(
                    "Please enter a number"
                );
                return false;
            }
        },
    },

    // Prompt for email
    {
        type: "input",
        message: "Please enter the manager's email address.",
        name: "email",
        //  validaton
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the manager's email address.");
                return false;
            }
        },
    },

    // Prompt for manager github profile
    {
        type: "input",
        message: "Please enter the manager's GitHub account.",
        name: "github",
        //  validation
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the manager's GitHub account.");
                return false;
            }
        },
    },
];

// Engineers questions
const engineerQuestions = [
    // Prompt for engineer name
    {
        type: "input",
        message: "Please enter the name of the engineer!",
        name: "name",
        // validation
        validate: (appInput) => {
            // if statement for if the input is true input is valid
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter Engineer name!");
                return false;
            }
        },
    },

    // Prompt for manager id number
    {
        type: "input",
        message: "Please enter the engineer id",
        name: "id",
        //  validating a number was inputed
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log(
                    "Please enter a number "
                );
                return false;
            }
        },
    },

    // Prompt for manager email
    {
        type: "input",
        message: "Please enter the engineer's email address.",
        name: "email",
        //  validation
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("");
                return false;
            }
        },
    },

    // Prompt for manager github
    {
        type: "input",
        message: "Please enter the engineer's GitHub account.",
        name: "github",
        //  validation
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the engineer's GitHub account.");
                return false;
            }
        },
    },
];

// Intern questions

const internQuestions = [
    // prompt for intern name
    {
        type: "input",
        message: "Please enter the name of the intern.",
        name: "name",
        //  validating a String was inputed
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the name of the intern!");
                return false;
            }
        },
    },

    // prompt for intern id number
    {
        type: "input",
        message: "Please enter the ID number associated with the intern.",
        name: "name",
        //  validation
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log(
                    "Please enter a number"
                );
                return false;
            }
        },
    },

    // prompt for intern email address
    {
        type: "input",
        message: "Please enter the intern's email address.",
        name: "name",
        //  validating a String was inputed
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the intern's email address");
                return false;
            }
        },
    },

    // prompt for intern school they attend
    {
        type: "input",
        message: "Please enter the school name the intern attends.",
        name: "name",
        //  validating a String was inputed
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid
                console.log("Please enter the school name the intern attends.");
                return false;
            }
        },
    },
];

const addEmployeeToTeam = [
    {
        // user will be prompted with a list
        type: "list",
        message: "Additional employees apart of your team?",
        // if the user needs to add additional employees to the team the will be asked what type of employee is being added 
        name: "addEmployeeToTeam",
        choices: [
            "Select if you are adding a Engineer!",
            "Select if you are adding a Intern",
            "Select if you are done adding!"
        ]
    }
];