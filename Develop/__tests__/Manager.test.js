const Manager = require("../lib/Manager");

test('creates manager section', () => {
    const manager = new Manager('Cory', 1234, 'cory123@gmail', 1234567890);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});