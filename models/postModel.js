var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./commentModel');


var postSchema = new Schema ({
  text: String,
  author: String,
  upvotes: Number,
  downvotes: Number,
  comments: [Comment]
});

var post = mongoose.model("post", postSchema);

module.exports = post;
