'use strict';

/**
 * Middlewares to handle requests.
 * Business logics (e.g. db, provider) should be implementd separately
 * and exposed as a list of methods that will be called here.
 *
 * Different schemas may require different implementation of standard methods
 * (list, get, create, update, delete). Consult mongoose documentation
 * for more details.
 */
const User = require('../db').userDocument;

exports.helloWorld = (req, res) => {
  res.send('Hello World!');
};

exports.getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  const user = await User.find({}, null);
  res.json(user);
};

exports.createUser = async (req, res) => {
  console.log('createUser');
  let newUser = new User(req.body);
  const user = await newUser.save();
  return res.json(user);
};

exports.findUserById = async (req, res) => {
  console.log('findUserById');
  const user = await User.findOne({ _id: req.params.userId });
  res.json(user);
};

exports.findUser = async (req, res) => {
  console.log('findUserById');
  const query = req.body;
  const user = await User.findOne(query);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  console.log('updateUser');
  let newUser = req.body;
  const user = await User.updateOne({ _id: req.params.userId }, newUser);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  console.log('deleteUser');
  const user = await User.deleteOne({ _id: req.params.userId });
  let message = 'No user remove';
  if (user.deletedCount >= 1) {
    message = 'Delete user id: ' + req.params.userId + ' successfully';
  }
  const response = {
    message: message,
    id: user._id
  };
  res.json(response);
};
