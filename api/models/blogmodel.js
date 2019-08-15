// blog.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for blog
let createblog = new Schema({
  BlogTitle: {
    type:String
  },
  BlogDescription: {
    type:String
  },
  Author:{
    type:String
  },
  AuthorDescription:
  {
      type:String
  }
},{
    collection: 'createblog'
});

module.exports = mongoose.model('createblog', createblog);