
//importing the Employee constructor
const Employee = require('./employee');

//extending employee by the Engineer constructor
class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        //from employee constructor
        super (name, id, email);
        this.GitHub = GitHub;
    }
    //get gitHub info
    getGitHub () {
        return this.GitHub
    }

    //change role to engineer
    getRole () {
        return "Engineer";
    }
}

//exporting
module.exports = Engineer;