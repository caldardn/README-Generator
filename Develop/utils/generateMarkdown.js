// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== None) {
    return `[Static Badge](https://img.shields.io/badge/${license}-content)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://img.shields.io/badge/License-${license}-blue.svg`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n\n## License\n\nThis application uses the ${license} License.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  The license is: ${renderLicenseSection(data.license)}
  This is the link: ${renderLicenseLink(data.license)}

  ## Contribution 
  ${data.contribution}

  ## Tests 
  Use ${data.test} to run tests

  ## Questions 
  * For any other questions about the application please contact me by emailing: ${data.email}
  * To see other applications developed by me please visit my GitHub profile: [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;
