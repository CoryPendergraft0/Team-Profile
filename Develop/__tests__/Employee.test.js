const Employee = require("../lib/Employee");

test('creates employee section', () => {
    const employee = new Employee('Cory', 1234, 'Cory1234@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
    expect(employee.id).toEqual(expect.any(Number));
});
