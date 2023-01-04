const Engineer = require("../lib/Engineer");

test('creates engineer section', () => {
    const engineer = new Engineer('Cory', 1234, 'cory123@gmail', 'CoryP123');
    expect(engineer.github).toEqual(expect.any(String));
})