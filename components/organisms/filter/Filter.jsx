import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input/Input';
import Select from '../../atoms/select/Select';
import Tag from '../../atoms/tag/Tag';
import {
  FilterWrapper, ToggleContainer, ToggleButton, InterestsWrapper,
} from './filter.style';
import {
  TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4
} from '../../../settings/colors.setting';
import brazilStates from '../../../collections/brazil-states';

const COLORS = [TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4];
const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const renderTags = ({ keys, onClear }) => keys.map(({ label, color }, index) => (
  <Tag
    big
    withDelete
    color={color}
    key={label + index}
    onClear={() => onClear(index)}
  >
    {label.replace('\"', '')}
  </Tag>
));

const Filter = ({ onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [keyText, setKeyText] = useState('');
  const [keys, setKeys] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState({});

  const handleClear = (index) => {
    const newKeys = [...keys];
    newKeys.splice(index, 1);
    setKeys(newKeys);
  };

  useEffect(() => {
    onFilterChange({ keys, city, state });
  }, [keys, city, state]);

  return (
    <FilterWrapper>
      <ToggleContainer open={open}>
        <div>
          <Input
            placeholder="Palavras chave"
            value={keyText}
            onChange={(e) => setKeyText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && keyText) {
                const newKeys = [...keys];
                newKeys.push({ label: keyText, color: getRandomColor() });
                setKeyText('');
                setKeys(newKeys);
              }
            }}
              
          />
          {
            keys.length ? (
              <InterestsWrapper>
                {renderTags({ keys, onClear: handleClear })}
              </InterestsWrapper>
            ) : null
          }
        </div>
        <Input
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Select
          placeholder="Estado"
          options={brazilStates.map(({ name, initial }) => ({ label: name, id: initial }))}
          value={state}
          onSelect={setState}
        />
      </ToggleContainer>
      <ToggleButton onClick={() => setOpen(!open)}>
        { open ? 'Remover filtros -' : 'Filtrar lista +' }
      </ToggleButton>
    </FilterWrapper>
  );
};

Filter.prpTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;

