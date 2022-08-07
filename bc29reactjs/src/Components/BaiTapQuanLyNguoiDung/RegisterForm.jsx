import React, { Component, createRef, useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addUserAction, updateUserAction } from '../../Store/actions/user';

var x = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
const DEFAULT_VALUES = {
  id: '',
  username: '',
  fullName: '',
  email: '',
  password: '',
  phoneNumber: '',
  type: 'Client',
};
const DEFAULT_ERRORS = {
  id: '',
  username: '',
  fullName: '',
  email: '',
  password: '',
  phoneNumber: '',
  type: 'Client',
};

export default function RegisterForm() {

  const [state, setState] = useState({
    values: DEFAULT_VALUES,
    errors: DEFAULT_ERRORS,
  });
  
  const [valid, setValid] = useState({ isValid: true });

  const {selectedUser} = useSelector((state)=> state.userReducer);

  useEffect(() => {
    if (selectedUser)
    {
      setState((prev_state)=>({
        ...prev_state,
        values: selectedUser,
      }));
    }
  },[selectedUser]);


const dispatch = useDispatch();

const formRef = createRef();
  // static getDerivedStateFromProps(nextProps, currentState) {
  //   if (
  //     nextProps.selectedUser &&
  //     currentState.values.id !== nextProps.selectedUser.id
  //   ) {
  //     currentState.values = nextProps.selectedUser;
  //   }

  //   return currentState;
  // }

  const handleChange = (event) => {
    // if (event.target.name === 'username') {
    //   setState({
    //     username: event.target.value,
    //   });
    // }

    // if (event.target.name === 'fullName') {
    //   this.setState({
    //     fullName: event.target.value,
    //   });
    // }
    const { name, value } = event.target;

    setState({
      values: {
        ...state.values,
        [name]: value,
      },
      errors: {
        ...state.errors,
      }
    });
    if (formRef.current?.checkValidity()) {
      setValid({
        isValid: false,
      })
    }
  };
const handleBlur = (event) => {
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

    setState({
      values: {
        ...state.values,
      },
      errors: {
        ...state.errors,
        [name]: message,
      },
    });
    // if (!event.target.checkValidity()) {
    //   setValid({
    //     isValid: false,
    //   })
    // }
  };


const handleSubmit = (event) => {
    event.preventDefault();

    // duyệt object là for in
    // for (const key in this.state.errors) {
    //   const message = this.state.errors[key];

    //   if (message) {
    //     return;
    //   }
    // }

    if (!event.target.checkValidity()) {
      return;
    }
    // if (this.props.selectedUser) {
    //   this.props.dispatch({
    //     type: 'UPDATE_USER',
    //     payload: this.state.values,
    //   });
    // } else {
    //   this.props.dispatch({
    //     type: 'ADD_USER',
    //     payload: this.state.values,
    //   });
    // }

    // this.props.dispatch({
    //   type: this.props.selectedUser ? 'UPDATE_USER' : 'ADD_USER',
    //   payload: this.state.values,
    // });

    if (selectedUser) {
      dispatch(updateUserAction(state.values));
    } else {
      dispatch(addUserAction(state.values));
    }
    setState(
      {
        values: DEFAULT_VALUES,
        errors: DEFAULT_ERRORS,
      }
    );
    setValid({
      isValid: true,
    })
  };


    const { username, fullName, password, email, phoneNumber, type } = state.values ;

    return (
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form ref={formRef} noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    title="Username"
                    required
                    type="text"
                    name="username"
                    value={username}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    minLength = {5}
                    maxLength = {10}
                    autoComplete = "off" 
                  />
                  {state.errors.username && (
                    <span className="text-danger">
                      {state.errors.username}
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
                    minLength={6}
                    maxLength={20}
                    name="fullName"
                    value={fullName}
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    pattern= {x}
                    autoComplete = "off"
                  />
                  {state.errors.fullName && (
                    <span className="text-danger">
                      {state.errors.fullName}
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
                    minLength = {5}
                    maxLength = {10}
                    value={password}
                    name="password"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete = "off"
                  />
                  {state.errors.password && (
                    <span className="text-danger">
                      {state.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    required
                    value={phoneNumber}
                    title="Phone number"
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete = "off"
                    pattern="[0-9]+"
                  />
                  {state.errors.phoneNumber && (
                    <span className="text-danger">
                      {state.errors.phoneNumber}
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
                    value={email}
                    type="text"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete = "off"
                  />
                  {state.errors.email && (
                    <span className="text-danger">
                      {state.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    required
                    value={type}
                    name="type"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              disabled={valid.isValid}
              className="btn btn-warning mr-2"
            >
              SAVE
            </button>
            <button
            onClick={(e)=>{
              setState({
                values: DEFAULT_VALUES,
                errors: DEFAULT_ERRORS,
              })
            }} 
            type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </form>
        </div>
      </div>
    );
  };
  




