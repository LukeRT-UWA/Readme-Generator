// Reference local file system.
const fs = require('fs');
// Reference inquirer
const inquirer = require('inquirer');

const markdown = require('./lib/markdown');




console.log(markdown);
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
            message: 'Write down the project description?',
            name: 'desc',
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

    ])
    .then((response) => {


        let readmeContent = markdown.generateReadme(response)

        //Create readme file
        fs.writeFile('readme.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    }
    );
