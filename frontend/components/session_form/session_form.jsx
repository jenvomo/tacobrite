import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount () {
    this.props.receiveErrors([]);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin (e) {
    e.preventDefault();
    const demoUser = {email: 'demo@demo.com', password: 'password'}
    this.props.processForm(demoUser);
  }

  render () {
    if (this.props.formType === 'login') {
      return (
        <div>

          <div className='icon'></div>

          <form className='login-form' onSubmit={this.handleSubmit}>
            <p className='welcome-main'>Welcome back</p>
            <div className='welcome-sub'>
              <p>Please enter your email and password to log in.</p>
              {this.props.navLink}
            </div>

            <div className='email-field'>
              <label className='user-form-field'>Email address
                <input
                  type='text'
                  onChange={this.update('email')} />
              </label>
            </div>

            <label id='password' className='user-form-field'>Password
              <input type='password'
                onChange={this.update('password')} />
              <p className='login-errors'>{this.props.errors}</p>
            </label>

            <button>Log In</button>
            <button onClick={this.demoLogin}>Demo Log In</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='main-form'>

          <div className='icon'></div>

          <form className='login-form' onSubmit={this.handleSubmit}>
            <p className='welcome-main'>Welcome</p>
            <div className='welcome-sub'>
              <p>Create an account.</p>
              {this.props.navLink}
            </div>

            <div className='email-field'>
              <label className='user-form-field'>Email address
                <input
                  type='text'
                  onChange={this.update('email')} />
              </label>
            </div>

            <div className='names'>
              <label className='first-name'>First Name
                <input
                  type='text'
                  onChange={this.update('firstName')} />
              </label>

              <label className='last-name'>Last Name
                <input
                  type='text'
                  onChange={this.update('lastName')} />
              </label>
            </div>

            <label id='password' className='user-form-field'>Password
              <input
                type='password'
                onChange={this.update('password')} />
              <p className='login-errors'>{this.props.errors}</p>
            </label>


            <div className='line'></div>

            <div className='sign-up-reqs'>
              <p className='pass-reqs'>Your password must be at least 8 characters</p>
              <p className='agreement'>By signin up, I agree to give Eventliter  a 5 star rating on google.</p>
            </div>

            <button>Sign Up</button>

          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
