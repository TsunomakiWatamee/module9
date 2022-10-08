// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "what's your name?"
    },
    {
        type: "input",
        name: "github",
        message: "what's your github?"
    },
    {
        type: "input",
        name: "description",
        message: "enter description"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide examples and instructions"
    },
    {
        type: "input",
        name: "credits",
        message: "Who's your collabrator?"
    },
    {
        type: "input",
        name: "license",
        message: "Inform other developers what they mnay and may not beable to do"
    },
    {
        type: "input",
        name: "installation",
        message: "Tell me the steps you took to install your project"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
