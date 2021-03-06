'use strict';

/**
 * Mongoose main document schema and model.
 * Model should be defined only for the main document.
 */

const mongoose = require('mongoose');
const { hooks, methods, toJSON } = require('./functions');
const subDocumentSchema = require('../dataSubdocument');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: false,
      Required: true
    },
    password: {
      type: String,
      Required: true
    },
    name: {
      type: String
    },
    content: [
      {
        id: Number
      }
    ],
    data: [subDocumentSchema],
    metadata: {
      created: {
        type: Date,
        default: Date.now
      },
      updated: {
        type: Date,
        default: Date.now
      }
    }
  },
  { toJSON }
);

/**
 * Middlewares a.k.a. Hooks
 * Refer to mongoose document for more details.
 * Fat arrow notation cannot be used due to its lexical scope property.
 */
const preHooks = Object.keys(hooks.pre);
const postHooks = Object.keys(hooks.post);

preHooks.forEach(hook => {
  userSchema.pre(hook, hooks.pre[hook]);
});
postHooks.forEach(hook => {
  userSchema.post(hook, hooks.post[hook]);
});

/**
 * Custom methods for this schema.
 * Fat arrow notation cannot be used due to its lexical scope property.
 */
const customMethods = Object.keys(methods);
customMethods.forEach(method => {
  userSchema.methods[method] = methods[method];
});

module.exports = mongoose.model('Users', userSchema);
