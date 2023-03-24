const figlet = require('figlet');

const input = 'Hello World';

figlet(input, { font: 'Slant' }, function(err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});