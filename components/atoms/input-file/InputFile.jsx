import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Label, InputWrapper, Icon
} from './inputFile.style';

const InputFile = ({
  value, placeholder, accept, onChange,
  id,
}) => (
  <InputWrapper slim={!!value}>
    <Label htmlFor={id}>
      { value ? value.split('\\')[value.split('\\').length - 1] : placeholder }
    </Label>
    <Input
      id={id}
      type="file"
      accept={accept.join(',')}
      onChange={onChange}
    />
    <Icon
      src="/static/icons/upload-24.svg"
    />
  </InputWrapper>
);

InputFile.defaultProps = {
  placeholder: 'Subir arquivo',
  value: null,
  accept: [],
};

const valueShape = {
  
};

InputFile.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.shape(valueShape),
  accept: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
