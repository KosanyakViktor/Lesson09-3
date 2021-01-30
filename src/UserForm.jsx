import React, { Component } from 'react';

class UserForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(this.formRef));
    this.props.onSubmit(formData);
  };

  setRef = node => {
    this.formRef = node;
  }

  render() {
    return (
      <form ref={this.setRef} className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>

        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            className="form-input"
            name="occupation"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            className="form-input"
            name="about"
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;