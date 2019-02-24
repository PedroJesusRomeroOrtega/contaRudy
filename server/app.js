// const {environment,port,mongodbURI} = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const {environment,port,mongodbURI} = require('./config');

if (!environment || !port || !mongodbURI) {
  console.error(
    'ENV variables are missing.',
    'Verify that you have set them directly or in a .env file.',
  );
  process.exit(1);
} else {
  console.log('Using ENV variables');
}

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect(mongodbURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const accountEntryRouter = require('./routes/accountEntry.route');
app.use('/api/accountEntries', accountEntryRouter);
app.use('/api', (req, res) => res.json('Welcome to ContaRudy API!!!'));

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
