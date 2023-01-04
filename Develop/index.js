const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/page-template');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What role is the employee?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: nameInput => {
            if (nameInput)
            {
            return true;
            } else {
            console.log('You must enter a name');
            return false;
            }}
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?',
        validate: idInput => {
            if (idInput)
            {
            return true;
            } else {
                console.log('Please enter an ID number');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this employees email?',
        validate: emailInput => {
            if (emailInput)
            {
            return true;
            } else {
                console.log('Please enter the employees email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is this employees office number?',
        when:(officeNumberInput) => officeNumberInput.role === 'Manager',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter the office number');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this employees github username?',
        when:(githubInput) => githubInput.role === 'Engineer',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the Engineers github username');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is this interns school?',
        when:(schoolInput) => schoolInput.role === 'Intern',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the interns University');
                return false;
            }}
    },
    
]