//Engineer Test


// Engineer constructor 
const Engineer = require('../lib/engineer');

// object
test('an engineer object is created', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com', 'sbuntz');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.GitHub).toEqual(expect.any(String));
});

// getGitHub() 
test('gets the engineer gitHub username', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com', 'sbuntz');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.GitHub.toString()));
});



//getRole()
test('gets the engineer role', () => {
    const engineer = new Engineer('Stefanie', 28, 'stbuntz@gmail.com', 'sbuntz');

    expect(engineer.getRole()).toEqual("Engineer");
}); 