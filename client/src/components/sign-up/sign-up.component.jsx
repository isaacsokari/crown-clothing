import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [signUpCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...signUpCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
