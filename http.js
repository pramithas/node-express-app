const http = require('http');

// web server.
const server = http.createServer((req, res) => {
   
   if(req.url === '/'){
       res.end('Welcome to our home page');
   }
   else if(req.url === '/about'){
       res.end('Here is our short history');
   }
   else {
       res.end(`
       <h1>Oops!</h1>
       <p>We can't seem to find the page </p>
   `);
   }
});

// the port the server will be listening to.
server.listen(5000);