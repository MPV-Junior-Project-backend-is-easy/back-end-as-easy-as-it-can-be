const mongoose = require('mongoose');

const MongoDBvideosSchema = new mongoose.Schema({
    title : { type: String, required: true},
    url : { type: String, required: true},
    user : { type: String,required: true},
    check : { type: String}

  });
  
  
  const VideoMongo = mongoose.model("VideoMongo", MongoDBvideosSchema);

  module.exports =  VideoMongo;