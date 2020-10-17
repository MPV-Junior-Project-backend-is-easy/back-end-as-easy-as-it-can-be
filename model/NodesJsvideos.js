const mongoose = require('mongoose');

const NodeJSvideosSchema = new mongoose.Schema({
    title : { type: String, required: true},
    url : { type: String, required: true}
  });
  
  const VideoNode = mongoose.model("VideoNode", NodeJSvideosSchema);

  module.exports = VideoNode;