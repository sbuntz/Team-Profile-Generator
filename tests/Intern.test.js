//Intern Test


// Intern constructor 
const Intern = require('../lib/intern');

// object
test('an intern object is created', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com', 'School of Life');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});


//getSchool()
test('gets the intern email', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com', 'School of Life');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//getRole()
test('gets the intern role', () => {
    const intern = new Intern('Stefanie', 28, 'stbuntz@gmail.com', 'School of Life');

    expect(intern.getRole()).toEqual("Intern");
}); 