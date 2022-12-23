const inquirer = require('inquirer');
const fs = require('fs');

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const generateREADME= ({title, descript, toContents, installation, usage, instructions}) =>
`# Title
    ${title}

## Description
    ${descript}

# Table of Contents
    ${toContents}

## Installation 
    ${installation}

# Usage
    ${usage}


## Instructions for download
    ${instructions}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'descript',
      message: 'Write a short description of what you project does',
    },
    {
        type: 'input',
        name: 'toContents',
        message: 'Please add a table of contents',
        
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
        
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of uses',
        
      },
    {
      type: 'input',
      name: 'instructions',
      message: 'Provide some instructions on how to use',
      
    },
  ])
  .then((data) => {

    fs.writeFile('READMEexample.md', generateREADME(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });