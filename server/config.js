require('dotenv').config({path:__dirname+'/.env'});

module.exports = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  mongodbURI: process.env.MONGODB_URI,
}
