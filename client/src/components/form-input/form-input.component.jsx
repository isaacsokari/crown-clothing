import React from 'react';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <FormInputLabel
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
