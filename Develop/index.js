// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your projects name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description of your project');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide the installation instructions');
                return false
            }
        }
    },
    {
        type:'input',
        name: 'usage',
        message: 'Provide the usage information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide the usage information');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide the contribution guidelines',
    },
    {
        type:'input',
        name: 'test',
        message: 'Provide the test instructions',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide the test instructions');
                return false
            }
        }
    }

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Successfully wrote" + fileName);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    questions().then(function (answerObject) {
        writeToFile("ReadMeGenerator.md", generateMarkDown(answerObject));
    });
}

// Function call to initialize app
init();
