var { default: Choice } = require("inquirer/lib/objects/choice");

var gnuAGPLv3 = `GNU AGPLv3`;
var gnuGPLv3 = 'GNU GPLv3';
var gnuLGPLv3 = 'GNU LGPLv3';
var mozillaPL2 = 'Mozilla Public License 2.0';
var apacheLicense2 = 'Apache License 2.0';
var mitLicense = 'MIT License';
var boostSoftware = 'Boost Software License 1.0';
var theUnlicense = 'The Unlicense'



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   var gnuAGPLv3badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) 
//   )] `
//   var gnuGPLv3badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//   )]`
//   var gnuLGPLv3badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
//   )]`
//   var mozillaPL2badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//   )]`
//   var apachelicense2badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//   )]`
//   var mitLicensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//   )]`
//   var boostSoftwarebadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//   )]`
//   var theUnlicensebadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
//   )]`
// if (license) {
//   Choice = gnuAGPLv3; { 
//     gnuAGPLv3badge;
//   };
//   Choice = gnuGPLv3; {
//     gnuGPLv3badge;
//   };
  // Choice = gnuLGPLv3; {
  //   gnuLGPLv3badge;
  // };
  // Choice = mozillaPL2; {
  //   mozillaPL2badge;
  // };
  // Choice = apachelicense2; {
  //   apachelicense2badge;
  // };
   
// }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
  const gnuAGPLv3link = `https://choosealicense.com/licenses/agpl-3.0/ 
  )] `
  const gnuGPLv3link = `https://choosealicense.com/licenses/gpl-3.0/
  )]`
  const gnuLGPLv3link = `https://choosealicense.com/licenses/lgpl-3.0/
  )]`
  const mozillaPL2link = `https://choosealicense.com/licenses/mpl-2.0/
  )]`
  const apachelicense2link = `https://choosealicense.com/licenses/apache-2.0/
  )]`
  const mitLicenselink = `https://choosealicense.com/licenses/mit/
  )]`
  const boostSoftwarelink = `https://choosealicense.com/licenses/bsl-1.0/
  )]`
  const theUnlicenselink = `https://choosealicense.com/licenses/unlicense/
  )]`
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, descript, toContents, installation, usage, instructions, license}) {
  var badge; 
  var gnuAGPLv3badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) 
  )] `
  var gnuGPLv3badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  )]`
  var gnuLGPLv3badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
  )]`
  var mozillaPL2badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  )]`
  var apacheLicense2badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  )]`
  var mitLicensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  )]`
  var boostSoftwarebadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  )]`
  var theUnlicensebadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  )]`
if (license) {
  Choice = gnuAGPLv3; { 
    badge = gnuAGPLv3badge;
  };
  } else if (license) {
    Choice = gnuGPLv3; {
    badge = gnuGPLv3badge;
  }
  } else if (license) {
    Choice = gnuLGPLv3; {
    badge = gnuLGPLv3badge;
  };
  }
  
  Choice = mozillaPL2; {
    badge = mozillaPL2badge;
  };
  Choice = apacheLicense2; {
    badge = apacheLicense2badge;
  };
  Choice = mitLicense; {
    badge = mitLicensebadge;
  }
  Choice = boostSoftware; {
    badge = boostSoftwarebadge;
  }
  Choice = theUnlicense; {
    badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    )]`
  }



  return  `# Title
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

  ## License
      ${badge}
  `;
};

module.exports = generateMarkdown;
