const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName : { type: String, required: true},
    password : { type: String, required: true},
    resNode : { type: String},
    resExpress : { type: String},
    resMongoo : { type: String},

  });
  
  const User = mongoose.model("User", userSchema);

  module.exports = User;