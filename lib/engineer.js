
//importing the Employee constructor
const Employee = require('./employee');

//extending employee by the manager constructor
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //from employee constructor
        super (name, id, email);
        this.gitHub = gitHub;
    }
    //get gitHub info
    getGithub () {
        return this.gitHub
    }

    //change role to engineer
    getRole () {
        return "Engineer";
    }
}

//exporting
module.exports = Engineer;