let fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = function ({name, location, pets, github, linkedin, hobby })


const questions = () => {
    return inquirer.prompt([
     {
        type: 'input',
        name: 'name',
        message: 'What is your name?'

     },
     
     {
        type: 'input',
        name: 'location',
        message: 'Where do you live?'
     },

     {
        type: 'input',
        name: 'pets',
        message: 'Do you have any pets?'
     },

     {
        type: 'input',
        name: 'github',
        message: 'What is your github profile name?'
     },

     {
        type: 'input',
        name: 'linkedin',
        
     }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
