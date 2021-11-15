//Employee Test


// Employee constructor 
const Employee = require('../lib/Employee');

// object
test('creates an employee object', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getId() 
test('gets employee ID', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets employee email', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//getRole()
test('gets role of employee', () => {
    const employee = new Employee('Stefanie', 28, 'stbuntz@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 