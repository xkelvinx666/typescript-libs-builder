const fs = require('fs-extra');
const path = require('path');

// copy test dir
fs.copySync(path.join(__dirname, '..', 'template/_tests'), path.resolve('__tests__'));
// copy src dir
fs.copySync(path.join(__dirname, '..', 'template/_src'), path.resolve('src'));
// copy gitignore
fs.copySync(path.join(__dirname, '..', 'template/_gitignore'), path.resolve('.gitignore'));
