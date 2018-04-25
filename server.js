import express from 'express';
const apiRouter = require('./api');

// Init App
const server = express();

// Set the View Engine
server.set('view engine', 'ejs');

// Home Route with ejs
server.get('/', (req, res) => {
  res.render('index');
});


// API Middleware
server.use('/api', apiRouter);

// Express Middleware for static assets
server.use(express.static('public'));

// Start Server
server.listen(8080, () => console.log('Express listening on port 8080...'))
