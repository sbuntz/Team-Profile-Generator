
//importing the Employee constructor
const Employee = require('./employee');

//extending employee by the Intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        //from employee constructor
        super (name, id, email);
        this.school = school;
    }
    //get gitHub info
    getSchool () {
        return this.school
    }

    //change role to Intern
    getRole () {
        return "Intern";
    }
}

//exporting
module.exports = Intern;