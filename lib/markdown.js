
// whatever you export is whatever you import



/**
 * This function will generate the whole readme.md template.
 * @param {object} payload An Object that has the following fields
 * 
 * title: string
 * 
 * desc: string
 * 
 * license: string
 * 
 */
function generateReadme(payload){
  


    return `# ${payload.title}

![${payload.license}](https://img.shields.io/badge/${payload.license}-Licensed-green)

## Description
${payload.desc}

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Licence](#Licence)
4. [How to Contribute](#How-to-Contribute)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
${payload.installation}

## Usage
${payload.usage}

## License
${payload.license}

## How to Contribute
${payload.contribute}

## Tests
${payload.tests}

## Questions
For further contact, I can be reached at:  
https://github.com/${payload.github}  
${payload.email}
`
}

module.exports = { 
    generateReadme,
};
