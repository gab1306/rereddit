var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
      author: String,
      body: String,
      upvotes: Number
    } );



//var Comment = mongoose.model("comment", CommentSchema);

module.exports = CommentSchema;
