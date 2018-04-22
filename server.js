import express from 'express';

// Init App
const server = express();

// Home Route
server.get('/', (req, res) => {
  res.send('Hello Wolrd');
});

server.use(express.static('public'));

// Start Server
server.listen(8080, () => console.log('Express listening on port 8080...'))
