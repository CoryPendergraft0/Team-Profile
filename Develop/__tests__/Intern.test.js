const Intern = require("../lib/Intern");

test('creates intern section', () => {
    const intern = new Intern('Cory', 1234, 'cory123@gmail', 'Univeristy of Alabama');
    expect(intern.school).toEqual(expect.any(String));
});