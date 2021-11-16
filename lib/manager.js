
//importing the Employee constructor
const Employee = require('./employee');

//extending employee by the manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //from employee constructor
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    
    // returns office number
    getofficeNumber () {
        return this.officeNumber;
    }   

    //change role to manager
    getRole () {
        return "Manager";
    }
}

//exporting
module.exports = Manager;