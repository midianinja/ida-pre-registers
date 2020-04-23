import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainer,
  Loading,
} from './button.style';

const Button = ({
  onClick, children, loading,
  customStyle, onMouseEnter, onMouseLeave,
  hasLoading, disabled, type,
}) => {
  useEffect(() => {
    const img = new Image();
    img.onload = () => null;
    img.src = '/static/icons/loading.svg';
  }, []);

  return (
    <ButtonContainer
      type={type}
      customStyle={customStyle}
      onClick={onClick}
      disabled={(loading && hasLoading) || disabled}
      loading={loading && hasLoading}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {
        loading && hasLoading
          ? <Loading src="/static/icons/loading.svg" />
          : children
      }
    </ButtonContainer>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  hasLoading: true,
  customStyle: '',
  type: 'button',
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  hasLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.string,
  type: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Button;
