const figlet = require('figlet');

function createFigletText(text) {
  return new Promise((resolve, reject) => {
    figlet(text, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = createFigletText;