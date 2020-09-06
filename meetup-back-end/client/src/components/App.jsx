import React from 'react';

import axios from 'axios';

import AttendeeForm from './AttendeeForm.jsx';
import AttendeeList from './AttendeeList.jsx';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      attendees: []
    };

    this.addAttendee = this.addAttendee.bind(this);
    this.getAttendees = this.getAttendees.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getAttendees();
  }

  getAttendees() {
    // get database attendee
    axios.get('/attendees')
      .then(res => {
        console.log('get-req: client got data: ', res.data)
        // set state to be data retrieved from db
        this.setState({
          attendees: res.data,
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm() {
    // when user submit from, post data to db
    this.addAttendee(this.state);
    // then get that data back with get request
    this.getAttendees();
  }

  addAttendee(attendee) {
    axios.post('/attendees', attendee)
      .then(() => {
        // doing get request doesn't help display recently added user to attendee list
        // this.getAttendees();
        console.log('client success post')
      })
      .catch((err) => {
        console.log(err);
        console.log('error on client side')
      })
  }

  render() {
    return (<div className="main">
      <AttendeeForm
        handleChange={this.handleChange}
        submitForm={this.submitForm}
      />
      <AttendeeList attendees={this.state.attendees} />
    </div>);
  }
}

export default App;
