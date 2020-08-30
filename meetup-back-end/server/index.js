const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./controllers/attendee');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));


// app.get('/attendees', db.getAll);
app.get('/attendees', (req, res) => {
  db.getAll((err, dataInfo) => {
    if (err) {
      console.log('server failed to get data');
    } else {
      console.log('server got data!');
      res.status(200).send(dataInfo)
    }
  });
});

// app.post('/attendees', (req, res) => {
//   db.add(addThisInfo, (err, info) => {
//     if (err) {
//       console.log('server failed to add data');
//       callback(err, null);
//     } else {
//       consoel.log('server added data!');
//       res.status(201).send()
//     }
//   })
// });

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});
