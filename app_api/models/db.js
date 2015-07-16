var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/CheckersIO';



mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});



// BRING IN YOUR SCHEMAS & MODELS
