import React, { Component } from 'react';

import Octicon, { Mail, Key } from '@githubprimer/octicons-react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCard,
  MDBIcon,
  MDBCardGroup,
  MDBCardImage,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBBox
} from
  "mdbreact";

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.onSubmit(email, password);
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md={12}>
      <div className='LoginForm'>
        <div className='card'>
          <div className='card-body'>
            <form className='LoginForm' onSubmit={this.handleSubmit}>
              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Mail} /></span>
                </div>
                <input
                  className='form-control'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='email@provider.com'
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className='input-group mb-3'>
                <div className="input-group-prepend">
                  <span className="input-group-text"><Octicon icon={Key} /></span>
                </div>
                <input
                  className='form-control'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={this.handleInputChange}
                />
              </div>

              <button className='btn btn-dark' type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
    )
  }
}

export default LoginForm;

