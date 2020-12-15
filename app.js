//to use fs module
const fs = require('fs');
//to import page-template into current module
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);

//ask TA about this const (lesson did not direct to create)..confused why it is needed
//replaced generatePage(name, github in fs.write.. why? to process faster? shorten code?)
const pageHTML = generatePage(name, github);

// Function to generate html using fs & including parameters
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});