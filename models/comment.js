var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    author: String,
    text: String
})

module.exports = mongoose.model("Comment", commentSchema);
// module.exports = mongoose.model("Campground", campgroundSchema);