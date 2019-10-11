'use strict';

const mongoose = require('mongoose');

const subDocumentSchema = mongoose.Schema({
  key: Number
});

module.exports = subDocumentSchema;
