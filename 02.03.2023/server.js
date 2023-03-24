const http = require('http');
const createFigletText = require('./figlet-text');

const PORT = 3000;

const server = http.createServer(async (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  const text = 'Hello, World!';
  const figletText = await createFigletText(text);
  response.end(figletText);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});