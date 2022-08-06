import React, { Component } from 'react';

import { connect } from 'react-redux';

class RegisterForm extends Component {
  // thuộc tính cấp ngoài cùng thì khi setState sẽ chỉ set lại thằng mới và giữ nguyên những thuộc tính cũ
  // thuộc tính bên trong 1 cấp thì khi setState sẽ mất đi giá trị cũ mà chỉ set cái mới
  state = {
    values: {
      id: '',
      username: '',
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      type: 'Client',
    },
    errors: {
      id: '',
      username: '',
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      type: '',
    },
  };

  handleChange = (event) => {
    // if (event.target.name === 'username') {
    //   this.setState({
    //     username: event.target.value,
    //   });
    // }

    // if (event.target.name === 'fullName') {
    //   this.setState({
    //     fullName: event.target.value,
    //   });
    // }

    const { name, value } = event.target;

    this.setState({
      values: {
        // giữ lại những giá trị cũ thông qua spread operator và thêm cái mới
        ...this.state.values,
        [name]: value,
      },
    });

    // console.log(event.target.name);
    // console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // duyệt object là for in
    for (const key in this.state.errors) {
      const message = this.state.errors[key];

      if (message) {
        return;
      }
    }

    this.props.dispatch({
      type: 'ADD_USER',
      payload: this.state.values,
    });
  };

  handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      //   validationMessage,
      validity: { valueMissing, patternMismatch, tooLong, tooShort },
    } = event.target;
    // const { valueMissing } = validity;

    let message = '';

    if (patternMismatch) {
      message = `${title} is invalid pattern.`;
    }

    if (tooShort || tooLong) {
      message = `${title} from ${minLength} - ${maxLength} characters.`;
    }

    if (valueMissing) {
      message = `${title} is required.`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message,
      },
    });
  };

  render() {
    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form noValidate onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    title="Username"
                    required
                    type="text"
                    name="username"
                    className="form-control"
                    // onChange={(event) =>  this.handleChange(event)}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.username && (
                    <span className="text-danger">
                      {this.state.errors.username}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    title="Full name"
                    required
                    minLength={4}
                    maxLength={12}
                    name="fullName"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.fullName && (
                    <span className="text-danger">
                      {this.state.errors.fullName}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    title="Password"
                    required
                    name="password"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.password && (
                    <span className="text-danger">
                      {this.state.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    required
                    title="Phone number"
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.phoneNumber && (
                    <span className="text-danger">
                      {this.state.errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    name="email"
                    title="Email"
                    type="text"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.email && (
                    <span className="text-danger">
                      {this.state.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    required
                    name="type"
                    className="form-control"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-warning mr-2">SAVE</button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(RegisterForm);
