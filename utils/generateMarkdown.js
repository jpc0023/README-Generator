// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![NPM](https://img.shields.io/npm/l/inquirer)'
  } else if (license === 'Apache 2') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL 3') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache 2') {
      licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GPL 3') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} - ${data.author}

  Link to the live project - [${data.title}](${data.URL})  
  Link to the repository - [${data.title}](${data.repo})

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}


  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Description](#description)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributing](#contributions)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  ${data.installation}

  ## Description:
  ${data.description}

  ## Usage:
  ${data.usage}

  ## Contribution guidelines:
  ${data.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ${data.tests}

  ## Questions:
  ### If you have any questions, you may contact me at either
  Github: [https://github.com/${data.userName}](https://github.com/${data.userName})
  or
  Email: [${data.userEmail}](mailto:${data.userEmail})
`;
}

module.exports = generateMarkdown;
