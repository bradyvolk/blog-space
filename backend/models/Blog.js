const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogSchema = new Schema(
  {
    blogTitle: {
      type: String,
    },
    author: {
      type: String,
    },
    lastUpdated: {
      type: Number,
    },
    blogText: {
      type: String,
    },
  },
  {
    collection: "blogs",
  }
);

module.exports = mongoose.model("Blog", blogSchema);
