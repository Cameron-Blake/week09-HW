// TODO: Include packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: "input",
    message: "Enter your project title: ",
    name: "title"
},
{
    type: "input",
    message: "Enter a short project description: ",
    name: "description"
},
{
    type: "input",
    message: "How do install the dependencies? ",
    name: "installation",
    default: "npm i will install dependencies"
},
{
    type: "input",
    message: "What information about the repo does the user need?",
    name: "usage"

},
{
    type: "list",
    message: "Which license should the project have:",
    name: "licenses",
    choices: ['BSD 3', 'APACHE 2.0', 'GPL 3.0', 'MIT', 'None']
},
{
    type: "input",
    message: "Enter contributing information: ",
    name: "contribute"

}, {
    type: "input",
    message: "How will you run tests?",
    name: "tests",
    defualt: "npm test will run the tests"
}, {
    type: "input",
    message: "What is your email?",
    name: "email",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponse) => { 
        console.log ('generating...');
        writeToFile('README.md', generateMarkdown({...inquirerResponse}));
   }); 
};

// Function call to initialize app
init();
