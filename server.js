// const http = require('http');
const app = require('./app');

// const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port);

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });