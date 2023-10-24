// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/${license}-content?color=blue)`;
    
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[${license} License](https://choosealicense.com/licenses/${license}/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  \n${renderLicenseBadge(data.license)}

  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  * The license is: ${renderLicenseSection(data.license)}
  * This is the link: ${renderLicenseLink(data.license)}

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
