import React from 'react';

class AttendeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label>First Name: </label>
        <input type="text" id="firstName" onChange={this.props.handleChange}></input>
        <label>Last Name: </label>
        <input type="text" id="lastName" onChange={this.props.handleChange}></input>
        <label>Email: </label>
        <input type="email" id="email" onChange={this.props.handleChange}></input>
        <label>Shirt Size:</label>
        <select onChange={this.props.handleChange} id="shirt" >
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <label>Skill Level:</label>
        <select onChange={this.props.handleChange} id="skillLevel" >
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="expert">expert</option>
        </select>
        <button onClick={this.props.submitForm}>REGISTER</button>
      </div>
    );
  }
}

export default AttendeeForm;