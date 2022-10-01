import React, { ChangeEventHandler, FormEventHandler } from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
import { Dispatch } from 'redux';

const SignUp = ({ signUpStart }: ReturnType<typeof mapDispatchToProps>) => {
  const [signUpCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
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
          handleChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userData: {
    email: string;
    password: string;
    displayName: string;
  }) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
