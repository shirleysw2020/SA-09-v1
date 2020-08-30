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
// exports.getAll = (req, res) => {
//   // your code here
//   Attendee.find({}, (err, dataInfo) => {
//     if (err) {
//       console.log('error getting db');
//       res.status(500);
//     } else {
//       console.log('success getting db!');
//       res.status(200).send(dataInfo)
//     }
//   });
// };

exports.add = (req, res) => {
  // your code here
};

// module.exports.