const express = require('express');
const bodyParser = require('body-parser');

// routes
const accountEntry = require('./routes/accountEntry.route');

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial'; //link from mlab
const mongoDB = (process.env.MONGODB_URI ? `${process.env.MONGODB_URI}/contaRudy` : dev_db_url);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/accountEntries', accountEntry);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`);
});

