import React from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  InputAtom,
} from './input.style';

const Input = ({
  loading,
  type,
  customStyle,
  value,
  inputStyle,
  placeholder,
  onFocus,
  onBlur,
  error,
  onChange,
  onKeyDown,
}) => (
  <InputContainer
    customStyle={customStyle}
    error={error}
    loading={loading}
  >
    <InputAtom
      type={type}
      customStyle={inputStyle}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </InputContainer>
);

Input.defaultProps = {
  type: 'text',
  customStyle: '',
  inputStyle: '',
  loading: false,
  error: false,
  placeholder: '',
  onFocus: () => undefined,
  onBlur: () => undefined,
  onKeyDown: () => undefined,
};

Input.propTypes = {
  customStyle: PropTypes.string,
  type: PropTypes.string,
  inputStyle: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
