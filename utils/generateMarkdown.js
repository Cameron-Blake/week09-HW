// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (license !== 'none') {
    return `\n [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This application is licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
    
  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
 ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
   
  * [Tests](#tests)
   
  * [Questions](#questions)
   
  
  ## Installation 

  To install necessary dependacies, run the following command:
 
  ${data.installation}

  ## Usage 

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing 

\`\`\`
  ${data.contributing}
\`\`\`

  ## Tests

  To run tests, run the following command:

\`\`\`
  ${data.test}
\`\`\`

  ## Questions

  If you need to contact me use [${data.email}](mailto:${data.email}). You can visit my profile at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
