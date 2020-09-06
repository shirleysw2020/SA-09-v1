const Attendee = require('../../db/models/Attendee');

exports.getAll = (callback) => {
  // your code here
  Attendee.find({}, (err, dataInfo) => {
    if (err) {
      console.log('error getting db');
      callback(err, null)
    } else {
      console.log('success getting db!');
      callback(null, dataInfo)
    }
  });
};


exports.add = (req, res) => {
  // your code here
  Attendee.insertMany(req.body, (err, result) => {
    if (err) {
      console.log('error posting db');
    } else {
      console.log('success posting db!', result);
    }
  })
};

// module.exports.