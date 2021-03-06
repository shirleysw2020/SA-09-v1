const mongoose = require('mongoose');
const connection = require('../index.js')

const attendeeSchema = new mongoose.Schema({
  // your code here
  firstName: String,
  lastName: String,
  email: String,
  shirt: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XL'];
  }
  skillLevel: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert'];
  }
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;
// module.exports.Attendee = Attendee;