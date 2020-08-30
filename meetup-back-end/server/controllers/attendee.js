const Attendee = require('../../db/models/Attendee.js');

exports.getAll = (req, res) => {
  // your code here
  Attendee.find({}, (err, dataInfo) => {
    console.log('get here');
    if (err) {
      console.log('error getting db');
      callback(err, null);
    } else {
      console.log('success getting db!');
      callback(null, dataInfo);
    }
  });
};

exports.add = (req, res) => {
  // your code here
};

// module.exports.