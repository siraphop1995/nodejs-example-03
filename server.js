const mongoose = require('mongoose');
const process = require('process');
const routes = require('./src')

app = require('./app');
port = process.env.PORT || 3000;

mongoose.Promise = require('bluebird');
const mongooseConfig = {
  useNewUrlParser: true,
  useCreateIndex: true
};
mongoose.connect(process.env.MONGO_URL, mongooseConfig, error => {
  if (error) throw error;
  console.log('Successfully connected to mongodb');
});

//Model and router
// User = require('./src/models/userListModel');
// const userRouter = require('./src/routes/userRouter');
// app.use(userRouter);
app.use('/', routes)

//Listen port
app.listen(port, () => {
  console.log('Start listen on port: ' + port);
});
