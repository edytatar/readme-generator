
// Packages needed for application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// Array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                // Project name
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                validate: function (title) {
                    if (title) {
                        return true;
                    }

                    return "A professional README needs a project title.";
                },
            },
            {
                // Project description
                type: 'input',
                message: 'Describe your application.',
                name: 'description',
                validate: function (description) {
                    if (description) {
                        return true;
                    }

                    return "A professional README needs a description.";
                },
            },
            {
                // Installation instructions
                type: 'input',
                message: 'What are the installation instructions?',
                name: 'installation',
                validate: function (install) {
                    if (install) {
                        return true;
                    }

                    return "A professional README needs to provide steps on how to install the project.";
                },
            },
            {
                // Application usage
                type: 'input',
                message: 'What is the usage of the application?',
                name: 'usage',
                validate: function (use) {
                    if (use) {
                        return true;
                    }

                    return "A professional README needs instructions on how to use the project.";
                },
            },
            {
                // Contribution directions
                type: 'input',
                message: 'How can someone contribute to this project?',
                name: 'contribution',
                validate: function (contribute) {
                    if (contribute) {
                        return true;
                    }

                    return "A professional README needs contribution instructions.";
                },
            },
            {
                // Test instructions
                type: 'input',
                name: 'test',
                message: 'Are there any test instructions you would like your contributors to follow?',
                validate: function (testing) {
                    if (testing) {
                        return true;
                    }

                    return "A professional README needs instructions on how to use the project.";
                },
            },
            {
                // License options
                type: 'list',
                name: 'license',
                message: 'Pick a license:',
                choices: ['MIT', 'Apache 2.0', 'BSD', 'No License'],
            },
            {
                // Github username
                type: 'input',
                name: 'username',
                message: 'What is your GitHub Username?',
                validate: function (username) {
                    if (username) {
                        return true;
                    }

                    return "Please enter your github username.";
                },
            },
            {
                // User's email
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                validate: function (email) {
                    let pass = email.match(/\S+@\S+\.\S+/g);
                    if (pass) {
                        return true;
                    }

                    return "Please enter a valid email.";
                },
            },
        ])
];

// Function to write README file
function writeToFile(fileName, data) {
    const generateReadme = generateMarkdown(data);
    fs.writeFile("README.md", generateReadme, (err) => err ? console.log(err) : console.log("Your README.md has been generated."))
};

// Function to initialize app
function init() {
    function init() {
        inquirer.prompt(questions)
            .then((data) => {
                writeToFile(data)
            })
    }
}

// Function call to initialize app
init();
