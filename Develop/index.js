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

]