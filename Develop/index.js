const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/page-template');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Managers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the managers ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enther the ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
}
addManager();