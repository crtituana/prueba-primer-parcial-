const mongoose = require ('mongoose');

const { Schema } = mongoose;

const studentModel = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    career:  { type: String },
    read:   { type: Boolean, default: false },
  });
module.exports = mongoose.model('Student', studentModel);
