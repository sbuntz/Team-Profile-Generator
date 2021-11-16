//Manager Test


// Manager constructor 
const Manager = require('../lib/manager');

// object
test('an manager object is created', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com', 22);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getofficeNumber() 
test('gets the manager ID', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com', 22);

    expect(manager.getofficeNumber()).toEqual(expect.any(Number));
});


//getRole()
test('gets the manager role', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com', 22);

    expect(manager.getRole()).toEqual("Manager");
}); 