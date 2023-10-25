// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/logo');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Create instances of Logo and shape classes
const logo = new Logo();
const triangle = new Triangle();
const circle = new Circle();
const square = new Square();

// Define the inquirer prompts
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters):',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
    },
];

// Prompt the user for input
inquirer.prompt(questions).then((answers) => {
    // Set text and text color in the Logo instance
    logo.setText(answers.text, answers.textColor);

    // Set the shape and shape color based on user input
    if (answers.shape === "Triangle") {
        triangle.setColor(answers.shapeColor);
        logo.setShape(triangle);
    } else if (answers.shape === "Circle") {
        circle.setColor(answers.shapeColor);
        logo.setShape(circle);
    } else if (answers.shape === "Square") {
        square.setColor(answers.shapeColor);
        logo.setShape(square);
    } else {
        console.log('Invalid shape selection.');
    }
    
    // Render the logo and save it to an SVG file
    const svgContent = logo.render();
    fs.writeFile('logo.svg', svgContent, (err) => 
        err ? console.log(err) : console.log('Generated logo.svg'));

});
