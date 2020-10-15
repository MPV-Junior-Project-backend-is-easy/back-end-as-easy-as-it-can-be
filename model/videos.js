const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
    title : { type: String, required: true},
    url : { type: String, required: true},
    height : { type: Number, required: true},
    width : { type: Number, required: true}
  });
  
  const Video = mongoose.model("Video", videosSchema);

  module.exports = Video;