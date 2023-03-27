let fs = require('fs')
let inquirer = require('inquirer')
let util = require('util')
// const generate = function ({name, location, email, github, linkedin, projectName})


let questions = () => {
   return inquirer.prompt([
     {
        type: 'input',
        name: 'name',
        message: 'Please type your first and last name.'

     },
     
     {
        type: 'input',
        name: 'location',
        message: 'Where do you live?'
     },

     {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
     },

     {
        type: 'input',
        name: 'github',
        message: 'What is your github profile name?'
     },

     {
        type: 'input',
        name: 'linkedin',
        message: 'Type your LinkedIn url'
      },

     {
         type: 'input',
         name: 'project-name',
         message: 'what is your project name?'
     },

     {
         type: 'checkbox',
         name: 'license',
         message: 'Please choose a license for your project.',
         choices: [
            'Mit',
            'apache',
            'isc'
         ]
     }
    ])
};
questions()

// // TODO: Create a function to write README file
// function writeToFile(README, data) {
//    fs.writeFile('README.md', data, err => {
//       // if there is an error 
//       if (err) {
//           console.log(err);
//           return;
//       // when the README has been created 
//       } else {
//           console.log("Your README has been successfully created!")
//       }
//   })
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

