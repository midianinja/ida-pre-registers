import React from 'react';
import PropTypes from 'prop-types';
import { TagWrapper, DeleteIcon } from './tag.style';
import {
  TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4
} from '../../../settings/colors.setting';

const COLORS = [TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4];
const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const Tag = ({ color, children, onClear, big, withDelete }) => (
  <TagWrapper big={big} color={color} onClick={onClear}>
    {children}
    {withDelete ? (
      <DeleteIcon src="/static/icons/clear-24.svg" />
    ) : null}
  </TagWrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  withDelete: PropTypes.bool.isRequired,
  big: PropTypes.bool.isRequired,
  onClear: PropTypes.func, 
};

Tag.defaultProps = {
  color: getRandomColor(),
  big: false,
  withDelete: false,
  onClear: () => null,
};

export default Tag;
