const express = require('express');
const bodyParser = require('body-parser');

// routes
const accountEntry = require('./routes/accountEntry.route');

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/accountEntries', accountEntry);

let port = 1234;

app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`);
});
