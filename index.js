// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
              console.log('Please enter your project title!');
            return false;
          }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description of this project.",
      validate: nameInput => {
          if (nameInput) {
              return true;
            } else {
              console.log('Please enter a description');
              return false;
          }
      }
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license you used for this project.",
      choices: [
        "None",
        "GPL 3",
        "MIT",
        "Apache 2"
      ],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your project be used?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List any guidelines others must follow to contribute.',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
      type: "input",
      name: "tests",
      message: "List the tests used for your project.",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your GitHub email?",
    },
    {
      type: "input",
      name: "URL",
      message: "What is the URL of the deployed project? (include http://)",
    },
    {
      type: "input",
      name: "repo",
      message: "What is the URL of the repository? (include http://)",
    }
  ];
  

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeFile(fileContent)
        });
}
// Function call to initialize app
init();