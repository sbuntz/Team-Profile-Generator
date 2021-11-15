//Manager Test


// Manager constructor 
const Manager = require('../lib/manager');

// object
test('an manager object is created', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

// getId() 
test('gets the manager ID', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com');

    expect(manager.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets the manager email', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

//getRole()
test('gets the manager role', () => {
    const manager = new Manager('Stefanie', 28, 'stbuntz@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 