import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Content, Placeholder, DropdownIcon, List,
  Option,
} from './select.style';

const renderOptions = ({ options, onSelect, setOpened }) => options.map(({ id, label }) => (
  <Option
    key={id}
    onClick={() => {
      setOpened(false);
      onSelect({ id, label });
    }}
  >
    {label}
  </Option>
));

const Select = ({
  options, placeholder, value, onSelect,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Content opened={opened} withValue={value && value.label}>
      <Placeholder onClick={() => setOpened(!opened)} withValue={value && value.label}>
        {value && value.label ? value.label : placeholder}
        <DropdownIcon src="/static/icons/dropdown.svg" />
      </Placeholder>
      {
        opened ? (
          <List>
            {renderOptions({ options, onSelect, setOpened })}
          </List>
        ) : null
      }
    </Content>
  );
};

Select.defaultProps = {
  options: [],
  placeholder: 'Selecione',
  value: null,
};

const optionShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  value: PropTypes.shape(optionShape),
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default Select;
