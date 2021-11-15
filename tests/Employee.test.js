//Employee Test


// Employee constructor 
const Employee = require('../lib/employee');

// object
test('an employee object is created', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getId() 
test('gets the employee ID', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets the employee email', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//getRole()
test('gets the employee role', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 