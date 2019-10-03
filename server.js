const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const process = require('process');
const errorHandler = require('./src/utils/errorHandler');

app = express();
port = process.env.PORT || 3000;

mongoose.Promise = require('bluebird');
const mongooseConfig = {
  useNewUrlParser: true,
  useCreateIndex: true
};
mongoose.connect(process.env.MONGO_URL, mongooseConfig, error => {
  if (error) throw error;
  console.log('Successfully connected');
});

//Express middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorHandler);

//Model and router
User = require('./src/models/userListModel');
const userRouter = require('./src/routes/userRouter');
app.use(userRouter);

//Listen port
app.listen(port, () => {
  console.log('Start listen on port: ' + port);
});
