const mongoose = require('mongoose');

// get a new mongoose schema
const Schema = mongoose.Schema;

// create the schema for a user with validations for username
const userSchema = new Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minlength: 3 
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;