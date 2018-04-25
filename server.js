import express from 'express';
<<<<<<< HEAD
const apiRouter = require('./api');
=======
>>>>>>> a5f8289c7fe6bc3e362ae36a49dba8ca6fd47c91

// Init App
const server = express();

<<<<<<< HEAD
// Set the View Engine
server.set('view engine', 'ejs');

// Home Route with ejs
server.get('/', (req, res) => {
  res.render('index');
});


// API Middleware
server.use('/api', apiRouter);

// Express Middleware for static assets
=======
// Home Route
server.get('/', (req, res) => {
  res.send('Hello Wolrd');
});

>>>>>>> a5f8289c7fe6bc3e362ae36a49dba8ca6fd47c91
server.use(express.static('public'));

// Start Server
server.listen(8080, () => console.log('Express listening on port 8080...'))
