let fs = require('fs')
let inquirer = require('inquirer')
let util = require('util')
// const generate = function ({name, location, email, github, linkedin, projectName})
let writeFile = util.promisify(fs.writeFile)

let questions = () => {
   return inquirer.prompt([
     {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'

     },
     
     {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
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
         name: 'test',
         message: 'What command should you write to run the test?'
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
let markdown = (response) => {
   return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
${response.description}
## Installation:
${response.installation}
## Usage:
${response.usage}
## Contributing:
${response.contributing}
## Test: 
${response.test}
## Credits:
${response.credits}
## License:
For more information about the License, click on the link below.
- [License](https://opensource.org/licenses/${response.license})
##  Questions:
For questions about the Generator you can go to my 
Github page at the following link:
- [Github Profile](https://github.com/${response.username})
For additional questions please reach out to me via email at: ${response.email}.
`
}

async function init(){
   try{
      const response = await questions()
      const rm = markdown(response)

      await writeFile('README.md', rm)
   }catch(err) {console.log(err)}
}
init()
