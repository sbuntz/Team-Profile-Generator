// employee constructor 

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // functions 
    //returns name
    getName () {
        return this.name;
    }

    // returns ID
    getId () {
        return this.id;
    }   

    // returns email
    getEmail () {
        return this.email;
    }

    // role set to employee 
    getRole () {
        return 'Employee'; 
    }
};

//exporting
module.exports = Employee;