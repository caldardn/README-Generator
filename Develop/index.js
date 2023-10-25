// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Title",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
    default: "caldardn",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "email",
    default: "caldardn@gmail.com",
  },
  {
    type: "input",
    message: "Please describe your project:",
    name: "description",
    default: "",
  },
  {
    type: "input",
    message: "Please type the installation instructions:",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "Please explain any important information for the user:",
    name: "usage",
    default: "There is no important information.",
  },
  {
    type: "list",
    message: "Is it possible for other users to contribute to this repository?",
    name: "contribution",
    choices: ["Users can contribute", "Users can not contribute"],
  },
  {
    type: "input",
    message: "What tests does your application require?",
    name: "test",
    default: "npm test",
  },
  {
    type: "list",
    message: "Which license does your project require",
    name: "license",
    choices: [
      "MIT",
      "None",
      "AFL-3.0",
      "Apache-2.0",
      "Artistic-2.0",
      "BSL-1.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "BSD-3-Clause-Clear",
      "BSD-4-Clause",
      "0BSD",
      "CC",
      "CC0-1.0",
      "CC-BY-4.0",
      "CC-BY-SA-4.0",
      "WTFPL",
      "ECL-2.0",
      "EPL-1.0",
      "EPL-2.0",
      "EUPL-1.1",
      "AGPL-3.0",
      "GPL",
      "GPL-2.0",
      "GPL-3.0",
      "LGPL",
      "LGPL-2.1",
      "LGPL-3.0",
      "ISC",
      "LPPL-1.3c",
      "MS-PL",
      "MPL-2.0",
      "OSL-3.0",
      "PostgreSQL",
      "OFL-1.1",
      "NCSA",
      "Unlicense",
      "Zlib",
    ],
  },
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>
    {
    
      fs.writeFile('README-generated.md',generateMarkdown(data),(err)=>
      err ? console.error(err) :console.log ('README created'))
    }
    );
}

// Function call to initialize app
init();
