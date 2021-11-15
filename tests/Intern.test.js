//Intern Test


// Intern constructor 
const Intern = require('../lib/intern');

// object
test('an intern object is created', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

// getId() 
test('gets the intern ID', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com');

    expect(intern.getId()).toEqual(expect.any(Number));
});

//getEmail()
test('gets the intern email', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

//getRole()
test('gets the intern role', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com');

    expect(intern.getRole()).toEqual("Intern");
}); 