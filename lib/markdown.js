
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

    


    return `
![${payload.license}](https://img.shields.io/badge/${payload.license}-Licensed-green)
## Title
${payload.title}

## Description
${payload.desc}

## License
${payload.license}
`
}

module.exports = {
    generateReadme,
};
