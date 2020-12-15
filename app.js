//to use fs module
const fs = require('fs');
//to import page-template into current module
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

// Function to generate html using fs & including parameters
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});