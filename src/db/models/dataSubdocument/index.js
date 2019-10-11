'use strict'

/**
 * Mongoose sub document schema.
 * No model should be defined, since it will cause mongoose
 * to considered the subdocument as another independent document,
 * not the children of a main document.
 * Subdocument will be saved when its parent is saved.
 */

const mongoose = require('mongoose')

const subDocumentSchema = mongoose.Schema({
  key: String,
})

module.exports = subDocumentSchema