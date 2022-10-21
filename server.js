// // Third Party Modules
// import express from "express";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// import session from "express-session";

// // ES Modules fix for__dirname
// import path, {dirname} from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url));

// // Import Router
// import indexRouter from './app/routes/index.route.server.js';

// // Instantiate app-server
// const app = express();

// // setup ViewEngine EJS
// app.set('views', path.join(__dirname,'/app/views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(session({ 
//     secret: 'MySecret',
//     saveUninitialized: false,
//     rersave: false
// }));

// // custom middleware
// //function helloWorld(req, res, next){
//  //   res.setHeader('Content-Type','text/plain');
//  //   res.end('Hello World');
// //};

// // custom middleware
// //function byeWorld(req, res, next){
//   //  res.setHeader('Content-Type','text/plain');
//   //  res.end('Good Bye World');
// //};

// // add middleware to connect application
// app.use('/', indexRouter);
// //app.use('/bye', byeWorld);

// // run app
// app.listen(3000);

console.log('Server running at http://localhost:3000');
import debug from 'debug';
debug('comp-229');
import http from 'http';

import app from './app/app.js';

const PORT = normalizePort(process.env.PORT || 3000);
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() 
{
  let addr = server.address();
  let bind = 'pipe ' + addr;
  debug('Listening on ' + bind);
}