const fs = require('fs'); //add path to file system
const inquirer = require('inquirer');
const path = require('path');
const {generateSVG, makeShape} = require('./lib/makeSvg');

inquirer
    .prompt([
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to (3) characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a color keyword:",
    },
    {
        type: "input",
        name: "shape",
        message: "Shape Color: Ender a color keyword:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: {"Circle", "Square", "Triangle"},
    }
]);