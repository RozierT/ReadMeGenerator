const fs = require("fs");
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a breif description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "What are your Installaion notes?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the Usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "Contributions?",
      name: "contributions",
    },
    {
      type: "input",
      message: "Tests?",
      name: "tests",
    },
    {
      type: "list",
      message: "License?",
      choices:['MIT', 'GPL','Apache'],
      name: "license",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const readmeContent =
      ` # ${answers.title}

       ## Description'

      ${answers.description}
    
      ## Table of Contents
      
      - [Installation](#installation)
      - [Usage](#usage)
      - [Contributions](#contributions)
      - [License](#license)
      
      ## Installation
      
      ${answers.installation}

      ## Usage
      
      ${answers.usage}
      
      ## Contributions
      
      ${answers.contributions}
      
      ## License
      
      ${answers.license}
      
      ## Tests
      
      ${answers.tests}

      ## Questions

      Github ${answers.github}
      Email me at ${answers.email}

     `
    

    fs.writeFileSync("README.md", readmeContent, (err) =>
      err ? console.error(err) : console.log("success!")
    );
  });