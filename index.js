const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 


const generateHTML = require('./src/generateHTML');

// team array
const teamArray = []; 

const addManager = () => {
    console.log(
        "\n",
    "Time to build your team!", "\n",
     "Please start by entering the team name followed by the manager's details","\n",
     "Note: all fields must be completed", "\n"
        ) 
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The manager must be entered");
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the team manager's ID?",
            validate: nameInput => {
                if  (nameInput) {
                    return true;
                } else {
                    console.log ("The manager's ID must be entered")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("The manager's email must be valid")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
            validate: nameInput => {
                if  (nameInput) {
                    return true;
                } else {
                    console.log ("The manager's office number must be entered")
                    return false; 
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
//        console.log(manager); 
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What type of team member would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The engineer's name must be entered");
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's ID?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The engineer's ID must be entered");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            when: (input) => input.role === "Engineer",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("The engineer's email must be valid")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'gitUsername',
            message: "What is the engineer's GitHub username?",
            when: (input) => input.role === "Engineer"
        },
//Intern
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The intern's name must be entered");
                    return false; 
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's ID?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("The intern's ID must be entered");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            when: (input) => input.role === "Intern",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("The intern's email must be valid")
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(answers => {

        
        let { name, id, email, role, gitUsername, school, addAnotherEmployee } = answers; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, gitUsername);


        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

        }

        teamArray.push(employee); 

        if (addAnotherEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// function to generate HTML 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });