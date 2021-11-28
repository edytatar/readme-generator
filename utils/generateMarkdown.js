// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === 'Apache 2.0') {
        return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    } else if (license === 'BSD') {
        return `![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    } else if (license === 'Unlicense') {
        return `![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
    } else {
        return "";
    }
}

// Rreturns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return `[MIT License](https://opensource.org/licenses/MIT)`;
    } else if (license === "Apache 2.0") {
        return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "BSD") {
        return `[BSD (3-Clause) License](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === "Unlicense") {
        return `[Unlicense](http://unlicense.org/)`;
    } else {
        return "";
    }
}

// Adding License to Table of Contents if license is selected
function licenseTableOfContents(license) {
    if (license === "No License") {
        return "";
    } else {
        return `* [License](#license)`;
    }
}

// Creates license section title if a license was selected
function renderLicenseSectionTitle(license) {
    if (license === "No License") {
        return "";
    } else {
        return `## License`; 
    }

}

// Creates license section content if a license was selected
function renderLicenseSectionContent(license) {
    if (license === "No License") {
        return "";
    } else {
        return `This project is licensed under the ${renderLicenseLink(license)}.`;
    }

}



// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 

  ${renderLicenseBadge(data.license)}
  <br>

  &nbsp;
  # Description
  ${data.description}

  &nbsp;
  # Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${licenseTableOfContents(data.license)}
  
---
  &nbsp;
  ## Installation:
  ${data.installation}

  &nbsp;
  ## Usage:
  ${data.usage}

  &nbsp;
  ## Contributing:
  ${data.contributing}

  &nbsp;
  ## Tests:
  ${data.tests}

  &nbsp;
  ## Questions:
  If you need any further assistance, my contact information is below.
  * Github: [${data.username}](<https://github.com/${data.username}>)
  
  * Email: ${data.email}

  &nbsp;
${renderLicenseSectionTitle(data.license)}
${renderLicenseSectionContent(data.license)}

`;
}

module.exports = generateMarkdown;
