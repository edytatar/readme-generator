# Dynamic README Generator

  ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
  <br>

  &nbsp;
It is very important to have a high-quality, professional README for every project&mdash;especially an open source one. From the README, the developer should understand what the app is for, how to use it, how to install it, how to report issues, and how to make contributions.

This is a command-line application that runs with Node.js. This dynamically creates a REAME.md file based on user input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 
 
This generator removes the hassle of creating a README.md file from scratch. This way, a user can devote more time on their project. Checkout the [`ExampleREADME.md`](https://github.com/edytatar/readme-generator/blob/main/EXAMPLE-README.md) file to see an example. 

  &nbsp;
  # Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)
  
---
  &nbsp;
  ## Installation:
  To generate your very own README, follow these steps:
  &nbsp;
  1. `git clone` this repository to your local machine
  2. In the project's terminal, run `npm install inquirer` to install the Inquirer package
  3. To run the application, navigate into the "utils" folder and run `node index.js`

  &nbsp;
  ## Usage:
  After following the above instructions for installation, the application will prompt the user with questions using the `Inquirer` package. 

  This application takes your responses and inputs them into a markdown file that includes the sections: table of contents, installation, usage, tests, and questions.
  
  If a user chooses a license, a badge will dynamically be rendered under the title, license will be added to the table of contents, and a license section will be created. 

  Lastly, to generate the README.md file, `fs.writeFile` is used. 

  To see a video of the application, please visit [`here`](https://drive.google.com/file/d/1X9IApOvkkHDtw0Aw3iXYGz5aVogfwsyu/view?usp=sharing).
  
  Please visit the [`ExampleREADME.md`](https://github.com/edytatar/readme-generator/blob/main/EXAMPLE-README.md) file to see an example. 


  &nbsp;
  ## Questions:
  If you need any further assistance, my contact information is below.
  * Github: [edytatar](<https://github.com/edytatar>)
  
  * Email: edytatar@gmail.com

  &nbsp;
# License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).



