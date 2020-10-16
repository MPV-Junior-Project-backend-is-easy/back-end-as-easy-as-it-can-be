const mongoose = require('mongoose');

const ExpressJSvideosSchema = new mongoose.Schema({
    title : { type: String, required: true},
    url : { type: String, required: true}
  });
  
  const VideoExpressJS = mongoose.model("VideoExpressJS", ExpressJSvideosSchema);

  module.exports =  VideoExpressJS;