// var express = require('express');
// var app = express();

// // app.set('port',(process.env.PORT || 5000));
// var PORT = process.env.PORT || 5000;

// // var http = require('http');
// // var server = http.Server(app);

// // app.use(app.router);
// // routes.initialize(app);

// // app.use(express.static(__dirname + '/public'));
// // app.use('src', __dirname + '/src');


// // app.get('/',function(request,response) {
// // 	response.render('./index');
// // });


// // var io = require('socket.io')(server);
// // io.on('connection', function(socket) {
// //   socket.on('message', function(msg) {
// //     io.emit('message', msg);
// //   });
// // });


// server.listen(PORT, function() {
//   console.log('App server running');
// });

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('src', path.join(__dirname, 'src'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))



const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);