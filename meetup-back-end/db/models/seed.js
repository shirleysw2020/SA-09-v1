// this file is for generating fakers and inserting into database
const mongoose = require('mongoose');

const Model = require('./Attendee.js');

const attendees = [];
const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const skillLevel = ['beginner', 'intermediate', 'expert'];

const seedAttendees = () => {
  for (var i = 0; i < 5; i++) {
    const dataInfo = {
      firstName: 'Junlin',
      lastName: 'Wu',
      email: 'junjunyay@gmail.com',
      shirt: tshirtSizes[Math.floor(Math.random() * tshirtSizes.length)],
      skillLevel: skillLevel[Math.floor(Math.random() * skillLevel.length)]
    }
    attendees.push(dataInfo);
  }
}

seedAttendees();
console.log(attendees, 'whats attendes?')
Model.Attendee.create(attendees, (err, result) => {
  console.log("whats attendees fn?", attendees);
    if (err) {
      console.log('failed saving listing to db!')
      throw error
    } else {
      console.log('success saving listing to db!')
    }
});