'use strict'

module.exports = {
  'GET /': {
    middlewares: ['helloWorld']
  },
  'GET /getAllUsers': {
    middlewares: ['getAllUsers']
  },
  'POST /createUser': {
    middlewares: ['createUser']
  },
  'GET /findUserById/:userId': {
    middlewares: ['findUserById']
  },
  'POST /findUser': {
    middlewares: ['findUser']
  },
  'PATCH /updateUser/:userId': {
    middlewares: ['updateUser']
  },
  'DELETE /deleteUser/:userId': {
    middlewares: ['deleteUser']
  }
};
