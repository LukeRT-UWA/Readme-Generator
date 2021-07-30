// Reference local file system.
const fs = require('fs');
// Reference inquirer
const inquirer = require('inquirer');
// Reference markdown (function that creates readme)
const markdown = require('./lib/markdown');





//Prompt for inquirer questions.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the Product Description?',
            name: 'desc',
        },
        {
            type: 'input',
            message: 'How is this application installed?',
            name: 'installation',
        },
        {
            type: 'list',
            message: 'What is the license?',
            name: 'license',
            choices: [
                'MIT',
                'BSD',
                'GPLv3',

            ]
        },
        {
            type: 'input',
            message: 'How is this application be used?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What tests have been run on this application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your Github profile name for contact?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your E-mail address for contact?',
            name: 'email',
        },


    ])
    .then((response) => {


        let readmeContent = markdown.generateReadme(response)

        //Create readme file
        fs.writeFile('readme.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    }
    );
