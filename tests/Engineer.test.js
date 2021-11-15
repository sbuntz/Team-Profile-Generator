//Engineer Test


// Engineer constructor 
const Engineer = require('../lib/engineer');

// object
test('an engineer object is created', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

// getId() 
test('gets the engineer ID', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets the engineer email', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

//getRole()
test('gets the engineer role', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
}); 